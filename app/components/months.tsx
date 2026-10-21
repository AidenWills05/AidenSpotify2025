import Image from 'next/image';
import { SongPlayButton } from './music-player';
import type { SongKey } from '../lib/song-catalog';

type Month = {
  key: string;
  month: string;
  minutes: string;
  artist: string;
  artistMinutes: string;
  song: string;
  songArtist: string;
  songKey: SongKey;
  mood: string;
  photo?: string;
  photos?: string[];
};

const photoDimensions: Record<string, { width: number; height: number }> = {
  "/spotify-site-assets/images/personal/2025-11-photo-01.jpg": {
    "width": 1170,
    "height": 869
  },
  "/spotify-site-assets/images/personal/2025-05-end-school-photo-01.jpg": {
    "width": 714,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-12-photo-01.jpg": {
    "width": 552,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-04-track-photo-01.jpg": {
    "width": 1427,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-06-photo-01.jpg": {
    "width": 1268,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-02-eagles-photo-01.jpg": {
    "width": 3024,
    "height": 4032
  },
  "/spotify-site-assets/images/personal/2025-01-winter-photo-01.JPG": {
    "width": 1080,
    "height": 1620
  },
  "/spotify-site-assets/images/personal/2025-07-work-photo-01.jpg": {
    "width": 714,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-08-ceecee-photo-01.jpg": {
    "width": 1170,
    "height": 870
  },
  "/spotify-site-assets/images/personal/2025-08-camp-photo-01.jpg": {
    "width": 1425,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-11-halloween-photo-01.jpg": {
    "width": 536,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-03-california-photo-01.jpg": {
    "width": 1428,
    "height": 951
  },
  "/spotify-site-assets/images/personal/2025-10-8k-photo-01.jpg": {
    "width": 875,
    "height": 951
  }
};

export default function Months({ months }: { months: Month[] }) {
  return (
    <section id="months" className="months-section" aria-labelledby="months-title">
      <header className="months-heading">
        <p className="archive-label">The monthly archive</p>
        <h2 id="months-title">A year, month by month.</h2>
        <p>Twelve months of music, with a few moments in between.</p>
      </header>

      <div className="months-grid">
        {months.map((month, index) => {
          const photos = month.photos ?? (month.photo ? [month.photo] : []);
          return (
            <article key={month.key} className="month-card" data-month-row>
              <div className={`month-background ${month.mood}`} aria-hidden="true" />
              <div className="month-content" data-month-reveal>
                <header className="month-header">
                  <div>
                    <p className="archive-label">2025 / {String(index + 1).padStart(2, '0')}</p>
                    <h3>{month.month}</h3>
                  </div>
                  <p className="month-minutes"><strong>{month.minutes}</strong><span>minutes</span></p>
                </header>

                <div className={`month-photos ${photos.length > 1 ? 'month-photos-pair' : ''}`}>
                  {photos.map((photo, photoIndex) => (
                    <figure className="month-photo" key={photo}>
                      <Image
                        src={photo}
                        alt={`${month.month} 2025, personal photo${photos.length > 1 ? ` ${photoIndex + 1}` : ''}`}
                        width={photoDimensions[photo]?.width ?? 900}
                        height={photoDimensions[photo]?.height ?? 900}
                        sizes={photos.length > 1 ? '(max-width: 767px) 42vw, 220px' : '(max-width: 767px) 80vw, 440px'}
                        className="month-photo-image"
                        style={{ objectFit: 'contain' }}
                      />
                    </figure>
                  ))}
                </div>

                <dl className="month-details">
                  <div>
                    <dt>Top artist</dt>
                    <dd>{month.artist}</dd>
                    <p>{month.artistMinutes} minutes</p>
                  </div>
                  <div>
                    <dt>Top song</dt>
                    <dd className="song-with-play"><span>{month.song}</span><SongPlayButton songKey={month.songKey} /></dd>
                    <p>{month.songArtist}</p>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
