import type { PlayableSong } from './song-catalog';

type PlaybackEvent = { data: { playingURI: string; isPaused: boolean; isBuffering: boolean } };
export type EmbedController = {
  loadEntity: (uri: string) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  destroy: () => void;
  addListener: {
    (event: 'ready', callback: () => void): void;
    (event: 'playback_update', callback: (event: PlaybackEvent) => void): void;
  };
};
export type SpotifyApi = {
  createController: (element: HTMLElement, options: { uri: string; width: string; height: number }, callback: (controller: EmbedController) => void) => void;
};

declare global {
  interface Window { onSpotifyIframeApiReady?: (api: SpotifyApi) => void }
}

let apiPromise: Promise<SpotifyApi> | null = null;

// Load Spotify only after the first play click. A failed request can be retried.
export function loadSpotifyApi(): Promise<SpotifyApi> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<SpotifyApi>((resolve, reject) => {
    const script = document.createElement('script');
    const timer = window.setTimeout(fail, 15000);
    function fail() {
      window.clearTimeout(timer);
      script.remove();
      delete window.onSpotifyIframeApiReady;
      reject(new Error('Spotify could not load.'));
    }
    window.onSpotifyIframeApiReady = (api) => {
      window.clearTimeout(timer);
      resolve(api);
    };
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    script.onerror = fail;
    document.body.appendChild(script);
  }).catch((error) => {
    apiPromise = null;
    throw error;
  });
  return apiPromise;
}

export type PlaybackState = {
  song: PlayableSong | null;
  status: 'idle' | 'loading' | 'playing' | 'paused' | 'error';
};

// One controller for the whole page, including duplicate appearances of a song.
export class SpotifyPlayback {
  private state: PlaybackState = { song: null, status: 'idle' };
  private controller: EmbedController | null = null;
  private pending: Promise<EmbedController> | null = null;
  private loadedId: string | null = null;
  private ready = false;
  private generation = 0;
  private request = 0;
  private cancelPending: (() => void) | null = null;

  constructor(
    private host: HTMLElement,
    private onChange: (state: PlaybackState) => void,
    private getApi: () => Promise<SpotifyApi> = loadSpotifyApi,
  ) {}

  select(song: PlayableSong) {
    if (song.id === this.state.song?.id && this.loadedId === song.id && this.controller && this.ready) {
      this.controller.togglePlay();
      return;
    }
    const request = ++this.request;
    this.update({ song, status: 'loading' });
    void this.ensureController(song).then((controller) => {
      // Rapid clicks and closing during loading must never start an older song.
      if (request !== this.request) return;
      if (this.loadedId !== song.id) {
        controller.pause();
        controller.loadEntity(`spotify:track:${song.id}`);
        this.loadedId = song.id;
      }
      this.update({ song, status: 'paused' });
      controller.play();
    }).catch(() => {
      if (request === this.request) this.update({ song, status: 'error' });
    });
  }

  close(notify = true) {
    ++this.request;
    ++this.generation;
    this.cancelPending?.();
    this.cancelPending = null;
    this.controller?.pause();
    this.controller?.destroy();
    this.controller = null;
    this.pending = null;
    this.loadedId = null;
    this.ready = false;
    this.host.replaceChildren();
    this.state = { song: null, status: 'idle' };
    if (notify) this.onChange(this.state);
  }

  private update(state: PlaybackState) {
    if (this.state.song?.id === state.song?.id && this.state.status === state.status) return;
    this.state = state;
    this.onChange(state);
  }

  private ensureController(song: PlayableSong): Promise<EmbedController> {
    if (this.controller && this.ready) return Promise.resolve(this.controller);
    if (this.pending) return this.pending;
    const generation = this.generation;
    this.pending = new Promise<EmbedController>((resolve, reject) => {
      const fail = (error: unknown) => {
        clearTimeout(timer);
        if (generation === this.generation) {
          ++this.generation;
          this.controller?.destroy();
          this.controller = null;
          this.pending = null;
          this.loadedId = null;
          this.ready = false;
          this.cancelPending = null;
          this.host.replaceChildren();
        }
        reject(error);
      };
      const timer = setTimeout(() => fail(new Error('Spotify player timed out.')), 20000);
      this.cancelPending = () => { clearTimeout(timer); reject(new Error('Player closed.')); };
      void this.getApi().then((api) => {
        if (generation !== this.generation) return;
        const placeholder = document.createElement('div');
        this.host.appendChild(placeholder);
        api.createController(placeholder, { uri: `spotify:track:${song.id}`, width: '100%', height: 80 }, (controller) => {
          if (generation !== this.generation) { controller.destroy(); return; }
          this.controller = controller;
          this.loadedId = song.id;
          controller.addListener('ready', () => {
            if (generation !== this.generation) return;
            clearTimeout(timer);
            this.cancelPending = null;
            this.ready = true;
            resolve(controller);
          });
          controller.addListener('playback_update', ({ data }) => {
            if (generation !== this.generation || data.playingURI !== `spotify:track:${this.state.song?.id}`) return;
            this.update({ song: this.state.song, status: data.isBuffering ? 'loading' : data.isPaused ? 'paused' : 'playing' });
          });
        });
      }).catch(fail);
    });
    return this.pending;
  }
}
