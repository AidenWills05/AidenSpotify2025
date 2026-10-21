'use client';

import Image from 'next/image';
import { SongPlayButton } from './music-player';
import type { SongKey } from '../lib/song-catalog';

type Song = { title: string; artist: string; plays: string; image: string; songKey: SongKey };

const artistPhotos = [
  { name: 'Kanye West', src: '/spotify-site-assets/images/artists/kanye-west/kanye-west-final-01.jpg' },
  { name: 'Quinn XCII', src: '/spotify-site-assets/images/artists/quinn-xcii/quinn-xcii-01.jpg' },
  { name: 'Wallows', src: '/spotify-site-assets/images/artists/wallows/wallows-02.jpg' },
];

export default function FinalSummary({ songs, artists }: { songs: Song[]; artists: string[] }) {

  return (
    <div className="final-overlay" data-final-overlay inert>
      <article className="final-card" data-final-card aria-labelledby="final-title">
        <div className="final-atmosphere" aria-hidden="true">
          <span data-final-overlay-float />
          <span data-final-overlay-float />
          <span data-final-overlay-float />
        </div>

        <header className="final-heading" data-final-overlay-piece>
          <p>Aiden Williams <span>/</span> Listening archive</p>
          <span className="final-year">2025</span>
        </header>

        <div className="final-hero" data-final-overlay-piece>
          <div>
            <h2 id="final-title">The sound<br />of 2025.</h2>
            <dl className="final-stats">
              <div><dt>Minutes listened</dt><dd>52,278</dd></div>
              <div><dt>Top genre</dt><dd>Hip Hop</dd></div>
            </dl>
          </div>
          <div className="final-photos" aria-label="Three of the year's top artists">
            {artistPhotos.map((photo) => (
              <figure key={photo.name}>
                <Image src={photo.src} alt={photo.name} fill sizes="(max-width: 600px) 22vw, 170px" />
                <figcaption>{photo.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="final-lists" data-final-overlay-piece>
          <section aria-labelledby="final-artists-title">
            <h3 id="final-artists-title">Top artists</h3>
            <ol className="final-artists">
              {artists.map((artist, index) => (
                <li key={artist}><span>{String(index + 1).padStart(2, '0')}</span><strong>{artist}</strong></li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="final-songs-title">
            <h3 id="final-songs-title">Most played songs</h3>
            <ol className="final-songs">
              {songs.map((song, index) => (
                <li key={song.title}>
                  <div className="final-song-row">
                    <span className="final-song-rank">{String(index + 1).padStart(2, '0')}</span>
                    <Image src={song.image} alt="" width={36} height={36} sizes="36px" />
                    <span className="final-song-copy"><strong>{song.title}</strong><small>{song.artist}</small></span>
                    <SongPlayButton songKey={song.songKey} />
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="final-player" data-final-overlay-piece>
          <div className="final-player-prompt"><span aria-hidden="true">♫</span><p>One more listen?<small>Tap any song’s play button.</small></p></div>
        </div>

        <footer className="final-footer" data-final-overlay-piece>
          <p>Hip hop first. Everything else after.</p>
          <p>Thanks for listening.</p>
        </footer>
      </article>
    </div>
  );
}
