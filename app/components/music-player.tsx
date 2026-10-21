'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { songCatalog, type SongKey } from '../lib/song-catalog';
import { SpotifyPlayback, type PlaybackState } from '../lib/spotify-playback';

type MusicContextValue = PlaybackState & { select: (key: SongKey, trigger: HTMLButtonElement) => void };
const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [playback, setPlayback] = useState<PlaybackState>({ song: null, status: 'idle' });
  const embedHost = useRef<HTMLDivElement>(null);
  const session = useRef<SpotifyPlayback | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const player = new SpotifyPlayback(embedHost.current!, setPlayback);
    session.current = player;
    return () => { player.close(false); session.current = null; };
  }, []);

  function select(key: SongKey, trigger: HTMLButtonElement) {
    lastTrigger.current = trigger;
    session.current?.select(songCatalog[key]);
  }

  function close() {
    session.current?.close();
    lastTrigger.current?.focus({ preventScroll: true });
  }

  return (
    <MusicContext value={{ ...playback, select }}>
      {children}
      <aside className="music-dock" hidden={!playback.song} data-status={playback.status} aria-label="Music player">
        <div className="music-dock-heading">
          <span role="status">{playback.status === 'loading' ? 'Loading Spotify…' : playback.status === 'playing' ? 'Now playing' : 'Listen on Spotify'}</span>
          <button type="button" onClick={close} aria-label="Stop music and close player" title="Stop and close">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
          </button>
        </div>
        <div className="music-embed" ref={embedHost} />
        {playback.song && (
          <p className="music-dock-help">
            {playback.status === 'error' ? 'Player unavailable. ' : 'If music hasn’t started, press play in the player. '}
            <a href={playback.song.url} target="_blank" rel="noopener noreferrer">Open in Spotify ↗</a>
          </p>
        )}
      </aside>
    </MusicContext>
  );
}

export function SongPlayButton({ songKey }: { songKey: SongKey }) {
  const music = useContext(MusicContext);
  if (!music) throw new Error('SongPlayButton must be inside MusicProvider.');
  const song = songCatalog[songKey];
  const selected = music.song?.id === song.id;
  const playing = selected && music.status === 'playing';
  const loading = selected && music.status === 'loading';
  const label = `${playing ? 'Pause' : 'Play'} ${song.title} by ${song.artist}`;

  return (
    <button
      className="song-play-button"
      type="button"
      onClick={(event) => music.select(songKey, event.currentTarget)}
      aria-label={label}
      title={label}
      aria-pressed={playing}
      aria-busy={loading}
      data-selected={selected}
      data-song-key={songKey}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {playing ? <path d="M7 5h4v14H7zm6 0h4v14h-4z" /> : <path d="m9 5 11 7-11 7V5Z" />}
      </svg>
    </button>
  );
}
