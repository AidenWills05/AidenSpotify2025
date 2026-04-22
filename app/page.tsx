'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const topArtists = [
  {
    rank: '02',
    name: 'Quinn XCII',
    minutes: '2,236',
    plays: '736',
    topSong: 'Stay Next To Me (with Chelsea Cutler)',
    image: '/spotify-site-assets/images/artists/quinn-xcii/quinn-xcii-01.jpg',
  },
  {
    rank: '03',
    name: 'Wallows',
    minutes: '1,974',
    plays: '620',
    topSong: "Don't You Think It's Strange?",
    image: '/spotify-site-assets/images/artists/wallows/wallows-01.jpg',
  },
  {
    rank: '04',
    name: 'Tyler, The Creator',
    minutes: '1,117',
    plays: '313',
    topSong: 'Sticky (feat. GloRilla, Sexyy Red & Lil Wayne)',
    image: '/spotify-site-assets/images/artists/tyler-the-creator/tyler-the-creator-01.jpg',
  },
  {
    rank: '05',
    name: 'Jon Bellion',
    minutes: '1,064',
    plays: '305',
    topSong: 'JT',
    image: '/spotify-site-assets/images/artists/jon-bellion/jon-bellion-01.jpg',
  },
];

const topSongHero = {
  title: 'Take Me Out',
  artist: 'Franz Ferdinand',
  plays: '51',
  minutes: '185',
  image: '/spotify-site-assets/images/albums/top-song/top-song-cover-main.jpg',
};

const topSongsList = [
  {
    rank: '02',
    title: 'Ghost Town',
    artist: 'Kanye West',
    plays: '47',
    minutes: '208',
    image: '/spotify-site-assets/images/albums/top-songs/song-02-cover.jpg',
  },
  {
    rank: '03',
    title: "Ain't No Rest for the Wicked",
    artist: 'Cage The Elephant',
    plays: '46',
    minutes: '132',
    image: '/spotify-site-assets/images/albums/top-songs/song-03-cover.jpg',
  },
  {
    rank: '04',
    title: 'Stay Next To Me (with Chelsea Cutler)',
    artist: 'Quinn XCII',
    plays: '44',
    minutes: '152',
    image: '/spotify-site-assets/images/albums/top-songs/song-04-cover.jpg',
  },
  {
    rank: '05',
    title: '1901',
    artist: 'Phoenix',
    plays: '43',
    minutes: '134',
    image: '/spotify-site-assets/images/albums/top-songs/song-05-cover.jpg',
  },
];

const totalMinutesHero = {
  total: '52,278',
  totalNumber: 52278,
  label: 'minutes listened in 2025',
  subtext: "that's 36 days of music, more than a month with something playing",
  statOneLabel: 'Average Per Day',
  statOneValue: '143',
  statOneUnit: 'minutes',
  statTwoLabel: 'Biggest Month',
  statTwoValue: 'July',
  statTwoUnit: 'most listening time',
};

const monthsTimeline = [
  {
    key: '2025-01',
    month: 'January',
    minutes: '3,640',
    artist: 'Kanye West',
    artistMinutes: '433',
    song: 'Noid',
    songArtist: 'Tyler, The Creator',
    mood:
      'bg-[radial-gradient(circle_at_20%_18%,rgba(220,235,255,0.22),transparent_20%),radial-gradient(circle_at_78%_20%,rgba(196,214,255,0.16),transparent_24%),linear-gradient(135deg,#dce7f7_0%,#c9d8ef_40%,#b7c9e4_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-01-winter-photo-01.JPG',
  },
  {
    key: '2025-02',
    month: 'February',
    minutes: '3,864',
    artist: 'Kanye West',
    artistMinutes: '461',
    song: "Ain't No Rest for the Wicked",
    songArtist: 'Cage The Elephant',
    mood:
      'bg-[radial-gradient(circle_at_18%_20%,rgba(255,215,215,0.20),transparent_18%),radial-gradient(circle_at_80%_18%,rgba(255,236,198,0.18),transparent_24%),linear-gradient(135deg,#f6e4ea_0%,#f4dfd7_45%,#f0dcc6_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-02-eagles-photo-01.jpg',
  },
  {
    key: '2025-03',
    month: 'March',
    minutes: '4,351',
    artist: 'Kanye West',
    artistMinutes: '430',
    song: 'JT',
    songArtist: 'Jon Bellion',
    mood:
      'bg-[radial-gradient(circle_at_16%_20%,rgba(225,255,214,0.22),transparent_20%),radial-gradient(circle_at_82%_22%,rgba(190,239,204,0.18),transparent_24%),linear-gradient(135deg,#e7f4dd_0%,#d7edd6_44%,#d2eadf_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-03-california-photo-01.jpg',
  },
  {
    key: '2025-04',
    month: 'April',
    minutes: '3,830',
    artist: 'Kanye West',
    artistMinutes: '423',
    song: 'Brazil',
    songArtist: 'Declan McKenna',
    mood:
      'bg-[radial-gradient(circle_at_22%_18%,rgba(237,255,186,0.18),transparent_18%),radial-gradient(circle_at_78%_22%,rgba(186,239,255,0.18),transparent_22%),linear-gradient(135deg,#edf4d8_0%,#dff0d8_42%,#d7edf4_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-04-track-photo-01.jpg',
  },
  {
    key: '2025-05',
    month: 'May',
    minutes: '5,239',
    artist: 'Kanye West',
    artistMinutes: '575',
    song: 'False Alarms (with Jon Bellion)',
    songArtist: 'Lawrence',
    mood:
      'bg-[radial-gradient(circle_at_18%_20%,rgba(255,222,170,0.20),transparent_18%),radial-gradient(circle_at_80%_18%,rgba(255,192,174,0.18),transparent_22%),linear-gradient(135deg,#f7ecd8_0%,#f6e1cf_44%,#f4d8d3_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-05-end-school-photo-01.jpg',
  },
  {
    key: '2025-06',
    month: 'June',
    minutes: '4,557',
    artist: 'Kanye West',
    artistMinutes: '433',
    song: 'Maple Syrup',
    songArtist: 'The Backseat Lovers',
    mood:
      'bg-[radial-gradient(circle_at_20%_18%,rgba(255,236,173,0.18),transparent_18%),radial-gradient(circle_at_78%_20%,rgba(186,230,255,0.18),transparent_22%),linear-gradient(135deg,#f8efd7_0%,#f5e5c9_38%,#e2eef7_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-06-photo-01.jpg',
  },
  {
    key: '2025-07',
    month: 'July',
    minutes: '5,303',
    artist: 'Kanye West',
    artistMinutes: '564',
    song: '1901',
    songArtist: 'Phoenix',
    mood:
      'bg-[radial-gradient(circle_at_18%_18%,rgba(255,214,108,0.24),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(255,163,106,0.20),transparent_22%),linear-gradient(135deg,#f9e6b4_0%,#f5cf99_42%,#efb88f_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-07-work-photo-01.jpg',
  },
  {
    key: '2025-08',
    month: 'August',
    minutes: '4,278',
    artist: 'Kanye West',
    artistMinutes: '294',
    song: 'Dance Alone',
    songArtist: 'Blanks',
    mood:
      'bg-[radial-gradient(circle_at_18%_20%,rgba(255,211,147,0.18),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(255,190,130,0.18),transparent_22%),linear-gradient(135deg,#f5e7cb_0%,#f0d7bc_44%,#ebcab0_100%)]',
    photos: [
      '/spotify-site-assets/images/personal/2025-08-camp-photo-01.jpg',
      '/spotify-site-assets/images/personal/2025-08-ceecee-photo-01.jpg',
    ],
  },
  {
    key: '2025-09',
    month: 'September',
    minutes: '4,312',
    artist: 'Kanye West',
    artistMinutes: '648',
    song: 'Take Me Out',
    songArtist: 'Franz Ferdinand',
    mood:
      'bg-[radial-gradient(circle_at_18%_18%,rgba(216,216,255,0.18),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(196,226,255,0.16),transparent_22%),linear-gradient(135deg,#e7e7f5_0%,#dde5f3_44%,#d4e1ef_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-10-8k-photo-01.jpg',
  },
  {
    key: '2025-10',
    month: 'October',
    minutes: '4,925',
    artist: 'Kanye West',
    artistMinutes: '617',
    song: '5 Years Time',
    songArtist: 'Noah And The Whale',
    mood:
      'bg-[radial-gradient(circle_at_18%_18%,rgba(217,131,90,0.20),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(243,183,113,0.16),transparent_22%),linear-gradient(135deg,#e8c4a8_0%,#dba98d_42%,#cb8f72_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-11-halloween-photo-01.jpg',
  },
  {
    key: '2025-11',
    month: 'November',
    minutes: '4,551',
    artist: 'Kanye West',
    artistMinutes: '464',
    song: 'Dracula',
    songArtist: 'Tame Impala',
    mood:
      'bg-[radial-gradient(circle_at_20%_18%,rgba(181,114,89,0.18),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(214,168,121,0.14),transparent_22%),linear-gradient(135deg,#c8b3a0_0%,#b3917d_42%,#916f60_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-11-photo-01.jpg',
  },
  {
    key: '2025-12',
    month: 'December',
    minutes: '3,428',
    artist: 'The Smiths',
    artistMinutes: '264',
    song: 'There Is a Light That Never Goes Out - 2011 Remaster',
    songArtist: 'The Smiths',
    mood:
      'bg-[radial-gradient(circle_at_18%_18%,rgba(215,228,248,0.18),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(196,208,228,0.16),transparent_22%),linear-gradient(135deg,#d9e2f0_0%,#c7d2e3_42%,#b4c2d6_100%)]',
    photo: '/spotify-site-assets/images/personal/2025-12-photo-01.jpg',
  },
];

const monthPairs = Array.from(
  { length: Math.ceil(monthsTimeline.length / 2) },
  (_, index) => monthsTimeline.slice(index * 2, index * 2 + 2)
);

const habitsData = {
  eyebrow: 'Habits',
  title: 'How the year got played',
  subtitle: 'not just what you listened to, but how you kept coming back to it',
  stats: [
    {
      label: 'Peak Hour',
      value: '2 PM',
      sub: 'your most active listening hour',
    },
    {
      label: 'Top Weekday',
      value: 'Monday',
      sub: 'the day that carried the most minutes',
    },
    {
      label: 'Avg Session',
      value: '32.6',
      sub: 'minutes per listening session',
    },
    {
      label: 'Biggest Day',
      value: 'May 12',
      sub: 'your highest-volume listening day',
    },
  ],
};

const genresData = {
  eyebrow: 'Genres',
  title: 'What 2025 sounded like',
  subtitle:
    'Hip Hop anchored the year, but Indie and Rock kept pulling at the edges while Pop stayed in the mix.',
  masses: [
    {
      genre: 'Hip Hop',
      minutes: '14,795',
      asset: '/spotify-site-assets/images/design/genre-mass-01.svg',
      blobClass:
        'right-[7%] bottom-[30%] w-[18rem] sm:w-[19rem] md:w-[50rem]',
      cardClass:
        'left-[12%] top-[13%] w-[13.25rem] sm:w-[13.5rem] md:w-[14rem]',
    },
    {
      genre: 'Indie',
      minutes: '11,853',
      asset: '/spotify-site-assets/images/design/genre-mass-02.svg',
      blobClass:
        'left-[7%] bottom-[28%] w-[16rem] sm:w-[17rem] md:w-[50rem]',
      cardClass:
        'right-[10%] top-[13%] w-[12.5rem] sm:w-[13rem] md:w-[14rem]',
    },
    {
      genre: 'Rock',
      minutes: '9,392',
      asset: '/spotify-site-assets/images/design/genre-mass-03.svg',
      blobClass:
        'right-[8%] top-[27%] w-[13rem] sm:w-[13.5rem] md:w-[50rem]',
      cardClass:
        'left-[12%] top-[58%] w-[10.5rem] sm:w-[11rem] md:w-[14rem]',
    },
    {
      genre: 'Pop',
      minutes: '6,355',
      asset: '/spotify-site-assets/images/design/genre-mass-04.svg',
      blobClass:
        'left-[5%] top-[25%] w-[12rem] sm:w-[12.5rem] md:w-[50rem]',
      cardClass:
        'right-[10%] top-[58%] w-[10rem] sm:w-[30.5rem] md:w-[14rem]',
    },
  ],
  leaders: [
    {
      label: 'Top Hip Hop Artist',
      value: 'Kanye West',
      sub: 'the center of the year',
      image: '/spotify-site-assets/images/artists/kanye-west/kanye-west-portrait-01.jpg',
    },
    {
      label: 'Top Indie Artist',
      value: 'Wallows',
      sub: 'indie never disappeared',
      image: '/spotify-site-assets/images/artists/wallows/wallows-01.jpg',
    },
    {
      label: 'Top Rock Artist',
      value: 'Cage The Elephant',
      sub: 'rock cut through the strongest',
      image: '/spotify-site-assets/images/artists/cage-the-elephant/cage-the-elephant-photo-01.jpg',
    },
    {
      label: 'Top Pop Artist',
      value: 'Quinn XCII',
      sub: 'kept the mix lighter',
      image: '/spotify-site-assets/images/artists/quinn-xcii/quinn-xcii-01.jpg',
    },
  ],
  shifts: [
    {
      label: 'Dominant Genre',
      value: 'Hip Hop',
      sub: 'the base layer for most of 2025',
    },
    {
      label: 'Persistent Undercurrent',
      value: 'Indie',
      sub: 'always present, never far away',
    },
    {
      label: 'Late-Year Turn',
      value: 'Rock',
      sub: 'its biggest visible push came later in the year',
    },
  ],
};

const pastYearsTimeline = [
  {
    year: '2018',
    minutes: '5,903',
    topArtist: 'Green Day',
    genre: 'Musical Theatre',
    note: 'a smaller year, split between Green Day and a lot of musical theatre',
    marker: { x: 170, y: 188 },
    accent: 'rgba(138, 194, 255, 0.28)',
  },
  {
    year: '2019',
    minutes: '22,444',
    topArtist: 'AJR',
    genre: 'Pop',
    note: 'the first real surge, with AJR taking over a huge share of the year',
    marker: { x: 650, y: 224 },
    accent: 'rgba(255, 208, 122, 0.24)',
  },
  {
    year: '2020',
    minutes: '43,191',
    topArtist: 'AJR',
    genre: 'Musical Theatre',
    note: 'the volume nearly doubled, but the mix still jumped between pop and theatre',
    marker: { x: 1120, y: 126 },
    accent: 'rgba(168, 236, 198, 0.26)',
  },
  {
    year: '2021',
    minutes: '30,678',
    topArtist: 'AJR',
    genre: 'Indie',
    note: 'a transition year, less total volume but a wider, more indie-leaning taste',
    marker: { x: 1590, y: 170 },
    accent: 'rgba(214, 187, 255, 0.24)',
  },
  {
    year: '2022',
    minutes: '48,484',
    topArtist: 'Kanye West',
    genre: 'Hip Hop',
    note: 'the Kanye era really takes hold and hip hop becomes the center of everything',
    marker: { x: 2060, y: 238 },
    accent: 'rgba(255, 180, 152, 0.24)',
  },
  {
    year: '2023',
    minutes: '59,731',
    topArtist: 'Kanye West',
    genre: 'Hip Hop',
    note: 'the biggest year overall, with the sound fully built around hip hop and repeat listens',
    marker: { x: 2580, y: 160 },
    accent: 'rgba(255, 232, 138, 0.24)',
  },
  {
    year: '2024',
    minutes: '55,208',
    topArtist: 'Kanye West',
    genre: 'Hip Hop',
    note: 'still huge, but more balanced, with hip hop leading and the rest of the taste filling in around it',
    marker: { x: 3110, y: 108 },
    accent: 'rgba(153, 214, 255, 0.24)',
  },
  {
    year: '2025',
    minutes: '52,278',
    topArtist: 'Kanye West',
    genre: 'Hip Hop',
    note: 'a little lower than the peak, but probably the clearest and most defined version of the taste yet',
    marker: { x: 3650, y: 142 },
    accent: 'rgba(132, 255, 196, 0.30)',
    current: true,
  },
];

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-fade]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#intro',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      introTl.to(
        '[data-intro-stage]',
        {
          scale: 1.22,
          transformOrigin: 'center center',
          ease: 'none',
        },
        0
      );

      introTl.to(
        '[data-intro-copy]',
        {
          y: -220,
          scale: 1.18,
          opacity: 0,
          ease: 'none',
          stagger: 0.02,
        },
        0
      );

      introTl.to(
        '[data-intro-cloud]',
        {
          x: -180,
          y: -120,
          scale: 1.7,
          opacity: 0,
          ease: 'none',
        },
        0
      );

      introTl.to(
        '[data-intro-album-card]',
        {
          x: 340,
          y: -180,
          scale: 5.4,
          opacity: 0,
          filter: 'blur(10px)',
          ease: 'none',
        },
        0.04
      );

      introTl.to(
        '[data-intro-kanye-card]',
        {
          x: -260,
          y: -80,
          scale: 5.8,
          opacity: 0,
          filter: 'blur(10px)',
          ease: 'none',
        },
        0.05
      );

      introTl.to(
        '[data-intro-wallows-card]',
        {
          x: 160,
          y: 260,
          scale: 6.2,
          opacity: 0,
          ease: 'none',
        },
        0.06
      );

      introTl.fromTo(
        '[data-intro-wallows-full]',
        {
          scale: 0.32,
          opacity: 0,
          y: 80,
          filter: 'blur(0px)',
        },
        {
          scale: 1.55,
          opacity: 0.92,
          y: 0,
          filter: 'blur(0px)',
          ease: 'none',
        },
        0.14
      );

      introTl.to(
        '[data-intro-wallows-full]',
        {
          scale: 2.35,
          opacity: 0,
          filter: 'blur(18px)',
          ease: 'none',
        },
        0.42
      );

      introTl.to(
        '[data-intro-tunnel]',
        {
          scale: 1.8,
          opacity: 1,
          ease: 'none',
        },
        0
      );

      introTl.to(
        '[data-intro-tunnel]',
        {
          opacity: 0,
          ease: 'none',
        },
        0.28
      );

      introTl.to(
        '[data-intro-base-bg]',
        {
          opacity: 0,
          ease: 'none',
        },
        0.24
      );

      introTl.to(
        '[data-intro-kanye-bg]',
        {
          opacity: 1,
          ease: 'none',
        },
        0.22
      );

      introTl.to(
        '[data-intro-top-artist-bg]',
        {
          opacity: 1,
          ease: 'none',
        },
        0.22
      );

      introTl.to(
        '[data-intro-grain]',
        {
          opacity: 0,
          ease: 'none',
        },
        0.24
      );

      gsap.fromTo(
        '[data-top-artist-bg]',
        { opacity: 0, y: 90, scale: 1.03 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#top-artist',
            start: 'top 78%',
            end: 'top 24%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-top-artist-image]',
        { opacity: 0, x: -140, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#top-artist',
            start: 'top 68%',
            end: 'top 22%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-top-artist-copy]',
        { opacity: 0, x: 90 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#top-artist',
            start: 'top 66%',
            end: 'top 20%',
            scrub: 1.2,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-artist-row]').forEach((row, index) => {
        const fromX = index % 2 === 0 ? -90 : 90;

        gsap.fromTo(
          row,
          { opacity: 0, x: fromX, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 78%',
              end: 'top 48%',
              scrub: 1,
            },
          }
        );
      });

      gsap.fromTo(
        '[data-top-song-image]',
        { opacity: 0, x: 140, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#top-song',
            start: 'top 46%',
            end: 'top 10%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-top-song-copy]',
        { opacity: 0, x: -90 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#top-song',
            start: 'top 44%',
            end: 'top 8%',
            scrub: 1.2,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-top-song-row]').forEach((row, index) => {
        const fromX = index % 2 === 0 ? -80 : 80;

        gsap.fromTo(
          row,
          { opacity: 0, x: fromX, y: 24 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 78%',
              end: 'top 48%',
              scrub: 1,
            },
          }
        );
      });

      gsap.fromTo(
        '[data-total-minutes-copy]',
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#total-minutes',
            start: 'top 70%',
            end: 'top 26%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-total-minutes-number]',
        { opacity: 0.35, scale: 0.86, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#total-minutes',
            start: 'top 72%',
            end: 'top 28%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-total-minutes-card]',
        { opacity: 0, x: 60, y: 24 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#total-minutes',
            start: 'top 68%',
            end: 'top 24%',
            scrub: 1.2,
          },
        }
      );

      gsap.to('[data-total-minutes-glow]', {
        x: 22,
        y: -16,
        scale: 1.08,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      ScrollTrigger.create({
        trigger: '#total-minutes',
        start: 'top 68%',
        once: true,
        onEnter: () => {
          const counter = { value: 0 };
          const el = document.querySelector('[data-total-minutes-counter]');

          if (!el) return;

          gsap.to(counter, {
            value: totalMinutesHero.totalNumber,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(counter.value).toLocaleString();
            },
          });
        },
      });

      gsap.utils.toArray<HTMLElement>('[data-month-row]').forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 56%',
              end: 'top 18%',
              scrub: 1.15,
            },
          }
        );

        const bg = row.querySelector('[data-month-bg]');
        const title = row.querySelector('[data-month-title]');
        const copy = row.querySelector('[data-month-copy]');
        const photo = row.querySelector('[data-month-photo-card]');

        if (bg) {
          gsap.to(bg, {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, scale: 0.78, y: 40 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 76%',
                end: 'top 42%',
                scrub: 1.1,
              },
            }
          );
        }

        if (copy) {
          gsap.fromTo(
            copy,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 42%',
                end: 'top 14%',
                scrub: 1.1,
              },
            }
          );
        }

        if (photo) {
          gsap.fromTo(
            photo,
            { opacity: 0, x: 50, y: 24, rotate: 5, scale: 0.94 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 2,
              scale: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 40%',
                end: 'top 12%',
                scrub: 1.15,
              },
            }
          );

          gsap.to(photo, {
            y: -6,
rotate: 2,
            duration: 4.2 + index * 0.12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      gsap.fromTo(
        '[data-month-collapse]',
        { opacity: 0, scale: 0.86, y: 70 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#months-collapse',
            start: 'top 58%',
            end: 'top 20%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-habits-copy]',
        { opacity: 0, y: 110, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#habits',
            start: 'top 64%',
            end: 'top 18%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        '[data-habits-grid]',
        { x: 16, y: 8 },
        {
          x: 0,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#habits',
            start: 'top 60%',
            end: 'top 18%',
            scrub: 1.05,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-habit-card]').forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 20,
            scale: 0.985,
          },
          {
            y: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              end: 'top 34%',
              scrub: 1.05,
            },
          }
        );

        gsap.to(card, {
          y: index % 2 === 0 ? -2 : -3,
          duration: 5.8 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      gsap.fromTo(
        '[data-genres-copy]',
        { opacity: 0, y: 90, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#genres',
            start: 'top 64%',
            end: 'top 18%',
            scrub: 1.15,
          },
        }
      );

      gsap.fromTo(
        '[data-genres-stage]',
        { opacity: 0, scale: 0.94, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#genres',
            start: 'top 62%',
            end: 'top 18%',
            scrub: 1.1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-genre-mass]').forEach((mass, index) => {
        gsap.fromTo(
          mass,
          { opacity: 0, scale: 0.84, y: 30 + index * 8 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#genres',
              start: 'top 60%',
              end: 'top 20%',
              scrub: 1.15,
            },
          }
        );

        gsap.to(mass, {
          y: index % 2 === 0 ? -5 : -7,
          x: index % 2 === 0 ? 3 : -3,
          duration: 6 + index * 0.35,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-genre-label]').forEach((label, index) => {
        gsap.fromTo(
          label,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#genres',
              start: 'top 56%',
              end: 'top 18%',
              scrub: 1.1,
            },
          }
        );

        gsap.to(label, {
  x: index % 2 === 0 ? 4 : -4,
  y: index % 2 === 0 ? -3 : 3,
  rotate: index % 2 === 0 ? 0.3 : -0.3,
  duration: 4 + index * 0.3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
  transformOrigin: 'center center',
});
      });

      gsap.utils.toArray<HTMLElement>('[data-genre-card]').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 98%',
              end: 'top 34%',
              scrub: 1.05,
            },
          }
        );
      });

      gsap.to('[data-genres-orb]', {
        scale: 1.03,
        x: 8,
        y: -6,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.fromTo(
  '[data-past-years-copy]',
  { opacity: 0, y: 80, filter: 'blur(10px)' },
  {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#past-years',
      start: 'top 72%',
      end: 'top 28%',
      scrub: 1.1,
    },
  }
);

const timelineTrack = document.querySelector<HTMLElement>('[data-timeline-track]');
const timelineSection = document.querySelector<HTMLElement>('#past-years');
const yearPanels = gsap.utils.toArray<HTMLElement>('[data-year-panel]');
const yearPoints = gsap.utils.toArray<HTMLElement>('[data-year-point]');
const yearChips = gsap.utils.toArray<HTMLElement>('[data-year-chip]');

if (timelineTrack && timelineSection && yearPanels.length) {
  gsap.set(yearPanels, {
    autoAlpha: 0,
    y: 44,
    scale: 0.92,
    rotateX: 10,
    transformOrigin: '50% 100%',
  });

  gsap.set(yearPoints, {
    scale: 1,
    transformOrigin: '50% 50%',
  });

  gsap.set(yearChips, {
    y: 0,
    opacity: 0.58,
    scale: 1,
    transformOrigin: '50% 50%',
  });

  const getTravel = () =>
    Math.max(timelineTrack.scrollWidth - window.innerWidth + 420, 1);

  let currentActiveIndex = -1;

  const setActiveYear = (index: number) => {
    if (index === currentActiveIndex) return;
    currentActiveIndex = index;

    gsap.to(yearPanels, {
      autoAlpha: 0,
      y: 44,
      scale: 0.92,
      rotateX: 10,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    gsap.to(yearPoints, {
      scale: 1,
      duration: 0.18,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    gsap.to(yearChips, {
      y: 0,
      opacity: 0.58,
      scale: 1,
      duration: 0.18,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    if (yearPanels[index]) {
      gsap.to(yearPanels[index], {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.24,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }

    if (yearPoints[index]) {
      gsap.to(yearPoints[index], {
        scale: 1.9,
        duration: 0.18,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }

    if (yearChips[index]) {
      gsap.to(yearChips[index], {
        y: -14,
        opacity: 1,
        scale: 1.06,
        duration: 0.18,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }
  };

  const yearsTl = gsap.timeline({
  scrollTrigger: {
    trigger: timelineSection,
    start: 'top top',
    end: () => `+=${getTravel() + window.innerHeight * 1.05}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
  const firstMarkerX = pastYearsTimeline[0].marker.x;
  const lastMarkerX = pastYearsTimeline[pastYearsTimeline.length - 1].marker.x;
  const activationOffset = 20;

  const progressHeadX =
    firstMarkerX + (lastMarkerX - firstMarkerX) * self.progress + activationOffset;

  let activeIndex = 0;

  pastYearsTimeline.forEach((item, index) => {
    if (progressHeadX >= item.marker.x) {
      activeIndex = index;
    }
  });

  setActiveYear(activeIndex);
},
  },
});

  yearsTl.to(
    timelineTrack,
    {
      x: () => -getTravel(),
      duration: 1,
      ease: 'none',
    },
    0
  );

  yearsTl.to(
    '[data-year-progress]',
    {
      scaleX: 1,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'none',
    },
    0
  );

  setActiveYear(0);
}

gsap.to('[data-past-years-orb]', {
  x: 14,
  y: -10,
  scale: 1.04,
  duration: 7.2,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
    },
    { scope: container }
  );

  return (
    <main ref={container} className="relative bg-[#f6efe4] text-neutral-900">
      <section id="intro" className="relative z-10 h-[360vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full w-full will-change-transform" data-intro-stage>
            <div className="absolute inset-0" data-intro-base-bg>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,199,76,0.62),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(255,116,180,0.45),transparent_28%),radial-gradient(circle_at_74%_78%,rgba(72,190,255,0.40),transparent_30%),radial-gradient(circle_at_48%_52%,rgba(255,255,255,0.35),transparent_32%),linear-gradient(135deg,#fff4d8_0%,#ffe4ef_45%,#ddf5ff_100%)]" />
            </div>

            <div className="absolute inset-0 opacity-0" data-intro-kanye-bg>
              <div className="absolute inset-0 overflow-hidden opacity-0" data-intro-top-artist-bg>
                <div className="absolute inset-x-0 -top-[28vh] bottom-0 bg-[radial-gradient(circle_at_18%_22%,rgba(29,185,84,0.22),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(80,155,245,0.28),transparent_28%),radial-gradient(circle_at_66%_78%,rgba(29,185,84,0.14),transparent_28%),linear-gradient(135deg,#f8efe4_0%,#e8fbf1_48%,#e5f0ff_100%)] blur-[6px]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-95" data-intro-tunnel>
              <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.35)_18%,rgba(255,255,255,0.12)_30%,transparent_48%)] blur-2xl" />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.05)_72%,rgba(0,0,0,0.12)_100%)]" />

            <img
              src="/spotify-site-assets/images/textures/texture-grain-01.png"
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-multiply"
              data-fade
              data-intro-grain
            />

            <div
              className="pointer-events-none absolute inset-0 opacity-0"
              data-intro-wallows-full
            >
              <img
                src="/spotify-site-assets/images/artists/wallows/wallows-01.jpg"
                alt="Wallows"
                className="h-full w-full object-cover"
              />
            </div>

            <img
              src="/spotify-site-assets/images/design/shape-cloud-01.svg"
              alt=""
              className="pointer-events-none absolute -left-16 top-10 w-[26rem] opacity-18 mix-blend-multiply"
              data-fade
              data-intro-cloud
            />

            <img
              src="/spotify-site-assets/images/artists/kanye-west/kanye-west-hero-02.jpg"
              alt="Kanye West"
              className="pointer-events-none absolute left-[4%] top-[16%] h-[26vh] w-[16vw] min-w-[160px] rounded-[2rem] object-cover shadow-2xl"
              data-fade
              data-intro-kanye-card
            />

            <img
              src="/spotify-site-assets/images/albums/top-song/top-song-cover-main.jpg"
              alt="Top song cover"
              className="pointer-events-none absolute right-[7%] top-[18%] h-[14rem] w-[14rem] rounded-[2rem] object-cover shadow-2xl"
              data-fade
              data-intro-album-card
            />

            <img
              src="/spotify-site-assets/images/artists/quinn-xcii/quinn-xcii-02.jpg"
              alt="Quinn XCII"
              className="pointer-events-none absolute bottom-[12%] right-[16%] h-[8.5rem] w-[6rem] rounded-[2rem] object-cover shadow-xl"
              data-fade
              data-intro-wallows-card
            />

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="relative z-10 max-w-4xl text-center">
                <p
                  className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-700"
                  data-fade
                  data-intro-copy
                >
                  Aiden Williams
                </p>

                <h1
                  className="text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl"
                  data-fade
                  data-intro-copy
                >
                  A Year in Sound
                </h1>

                <p
                  className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-800 sm:text-xl"
                  data-fade
                  data-intro-copy
                >
                  a year told through repeats, rewinds, and discoveries
                </p>

                <div
                  className="mx-auto mt-12 h-px w-32 bg-neutral-900/20"
                  data-fade
                  data-intro-copy
                />

                <p
                  className="mt-6 text-sm uppercase tracking-[0.25em] text-neutral-700"
                  data-fade
                  data-intro-copy
                >
                  scroll to begin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="top-artist"
        className="relative z-30 -mt-[100vh] flex min-h-[88vh] items-center overflow-hidden px-8 py-10"
      >
        <div className="absolute inset-0 overflow-hidden opacity-0" data-top-artist-bg>
          <div className="absolute inset-x-0 -top-[28vh] bottom-0 bg-[radial-gradient(circle_at_18%_22%,rgba(29,185,84,0.22),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(80,155,245,0.28),transparent_28%),radial-gradient(circle_at_66%_78%,rgba(29,185,84,0.14),transparent_28%),linear-gradient(135deg,#f8efe4_0%,#e8fbf1_48%,#e5f0ff_100%)] blur-[6px]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative" data-top-artist-image>
            <img
              src="/spotify-site-assets/images/artists/kanye-west/kanye-west-hero-01.jpg"
              alt="Kanye West"
              className="h-[58vh] max-h-[38rem] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>

          <div className="max-w-2xl">
            <p
              className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-700"
              data-top-artist-copy
            >
              Top Artist
            </p>

            <h2
              className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
              data-top-artist-copy
            >
              Kanye West
            </h2>

            <p
              className="mt-5 text-lg leading-8 text-neutral-800"
              data-top-artist-copy
            >
              With 5,547 minutes, Kanye West was your top artist of 2025
            </p>

            <p
              className="mt-3 text-base text-neutral-700"
              data-top-artist-copy
            >
              No artist soundtracked 2025 more
            </p>

            <div
              className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3"
              data-top-artist-copy
            >
              <div className="rounded-[1.4rem] bg-white/55 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Listening Time
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                  5,547
                </p>
                <p className="text-sm text-neutral-600">minutes</p>
              </div>

              <div className="rounded-[1.4rem] bg-white/55 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Artist Rank
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                  #01
                </p>
                <p className="text-sm text-neutral-600">overall in 2025</p>
              </div>

              <div className="rounded-[1.4rem] bg-white/55 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Global Fan
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                  Top 0.1%
                </p>
                <p className="text-sm text-neutral-600">of listeners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="top-artists-list"
        className="relative z-10 overflow-hidden px-6 pb-28 pt-10 sm:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,164,84,0.24),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(255,214,102,0.22),transparent_26%),radial-gradient(circle_at_70%_80%,rgba(255,120,150,0.18),transparent_28%),linear-gradient(180deg,#fbf3e6_0%,#fff1e7_44%,#fff7ef_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-700">
              Top Artists
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              The rest of the year’s core four
            </h3>
          </div>

          <div className="space-y-8">
            {topArtists.map((artist) => (
              <div
                key={artist.name}
                data-artist-row
                className="grid items-center gap-6 rounded-[2rem] bg-white/55 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-8 md:grid-cols-[90px_220px_minmax(0,1fr)_220px]"
              >
                <div className="text-4xl font-semibold tracking-tight text-neutral-400 sm:text-6xl">
                  {artist.rank}
                </div>

                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-36 w-full rounded-[1.5rem] object-cover shadow-xl sm:h-44"
                />

                <div>
                  <h4 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    {artist.name}
                  </h4>

                  <p className="mt-4 text-base text-neutral-600 sm:text-lg">
                    {artist.plays} plays in 2025
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-black/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Listening Time
                  </p>

                  <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    {artist.minutes}
                  </p>

                  <p className="text-sm text-neutral-600">minutes</p>

                  <div className="mt-5 h-px w-full bg-black/10" />

                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Top Song
                  </p>

                  <p className="mt-2 text-base font-medium text-neutral-900 sm:text-lg">
                    {artist.topSong}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="top-song"
        className="relative z-10 flex min-h-screen items-center overflow-hidden px-8 py-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,110,80,0.30),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(255,190,70,0.26),transparent_26%),radial-gradient(circle_at_72%_78%,rgba(255,70,110,0.18),transparent_28%),linear-gradient(135deg,#fff0e8_0%,#ffe8dc_42%,#fff6ea_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="max-w-2xl">
            <p
              className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-700"
              data-top-song-copy
            >
              Top Song
            </p>

            <h2
              className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
              data-top-song-copy
            >
              {topSongHero.title}
            </h2>

            <p
              className="mt-4 text-xl text-neutral-700 sm:text-2xl"
              data-top-song-copy
            >
              {topSongHero.artist}
            </p>

            <p
              className="mt-6 text-lg leading-8 text-neutral-800"
              data-top-song-copy
            >
              With {topSongHero.plays} plays, {topSongHero.title} was your top song of 2025.
            </p>

            <div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              data-top-song-copy
            >
              <div className="rounded-[1.5rem] bg-white/55 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Total Plays
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                  {topSongHero.plays}
                </p>
                <p className="text-sm text-neutral-600">plays in 2025</p>
              </div>

              <div className="rounded-[1.5rem] bg-white/55 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Listening Time
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                  {topSongHero.minutes}
                </p>
                <p className="text-sm text-neutral-600">minutes</p>
              </div>
            </div>
          </div>

          <div className="relative md:ml-14" data-top-song-image>
            <div className="absolute inset-0 scale-105 rounded-[2rem] bg-[radial-gradient(circle,rgba(255,190,90,0.22),transparent_62%)] blur-2xl" />
            <img
              src={topSongHero.image}
              alt={topSongHero.title}
              className="relative h-[24rem] w-[24rem] max-w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section
        id="top-songs-list"
        className="relative z-10 overflow-hidden px-6 pb-28 pt-10 sm:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(255,184,120,0.24),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(255,120,120,0.18),transparent_26%),radial-gradient(circle_at_72%_80%,rgba(255,214,102,0.20),transparent_28%),linear-gradient(180deg,#fff2ea_0%,#fff0e6_42%,#fff8ef_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-700">
              Top Songs
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              The songs that kept coming back
            </h3>
          </div>

          <div className="space-y-8">
            {topSongsList.map((song) => (
              <div
                key={`${song.rank}-${song.title}`}
                data-top-song-row
                className="grid items-center gap-6 rounded-[2rem] bg-white/55 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-8 md:grid-cols-[90px_160px_minmax(0,1fr)_180px]"
              >
                <div className="text-4xl font-semibold tracking-tight text-neutral-400 sm:text-6xl">
                  {song.rank}
                </div>

                <img
                  src={song.image}
                  alt={song.title}
                  className="h-32 w-32 rounded-[1.5rem] object-cover shadow-xl sm:h-36 sm:w-36"
                />

                <div>
                  <h4 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    {song.title}
                  </h4>

                  <p className="mt-2 text-base text-neutral-700 sm:text-xl">
                    {song.artist}
                  </p>

                  <p className="mt-4 text-base text-neutral-600 sm:text-lg">
                    {song.plays} plays in 2025
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-black/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Listening Time
                  </p>

                  <p className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    {song.minutes}
                  </p>

                  <p className="text-sm text-neutral-600">minutes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="total-minutes"
        className="relative z-10 flex min-h-screen items-center overflow-hidden px-8 py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,210,90,0.22),transparent_18%),radial-gradient(circle_at_78%_20%,rgba(120,170,255,0.18),transparent_24%),radial-gradient(circle_at_72%_80%,rgba(255,220,120,0.10),transparent_24%),linear-gradient(135deg,#07111f_0%,#0d1b31_40%,#132845_72%,#1a3554_100%)]" />
        <div
          className="absolute left-[6%] top-[24%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,215,110,0.16)_0%,rgba(255,215,110,0.08)_28%,transparent_68%)] blur-3xl"
          data-total-minutes-glow
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-sm uppercase tracking-[0.3em] text-white/65"
              data-total-minutes-copy
            >
              Total Minutes
            </p>

            <p
              className="text-[4.5rem] font-semibold leading-none tracking-tight text-white sm:text-[7rem] md:text-[8rem]"
              data-total-minutes-number
            >
              <span data-total-minutes-counter>0</span>
            </p>

            <p
              className="mt-4 text-xl text-white/78 sm:text-2xl"
              data-total-minutes-copy
            >
              {totalMinutesHero.label}
            </p>

            <p
              className="mt-8 max-w-2xl text-2xl font-medium leading-[1.35] tracking-tight text-white sm:text-3xl"
              data-total-minutes-copy
            >
              {totalMinutesHero.subtext}
            </p>
          </div>

          <div className="grid gap-5">
            <div
              className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md"
              data-total-minutes-card
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                {totalMinutesHero.statOneLabel}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {totalMinutesHero.statOneValue}
              </p>
              <p className="text-sm text-white/68">
                {totalMinutesHero.statOneUnit}
              </p>
            </div>

            <div
              className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md"
              data-total-minutes-card
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                {totalMinutesHero.statTwoLabel}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {totalMinutesHero.statTwoValue}
              </p>
              <p className="text-sm text-white/68">
                {totalMinutesHero.statTwoUnit}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="months" className="relative z-10 overflow-hidden px-4 pb-12 pt-4 sm:px-8">
  <div className="relative z-10 space-y-6">
    {monthPairs.map((pair, pairIndex) => (
      <section
        key={`month-pair-${pairIndex}`}
        className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"
      >
        {pair.map((month, monthIndex) => {
          const monthNumber = pairIndex * 2 + monthIndex + 1;
          const photos = month.photos ?? (month.photo ? [month.photo] : []);

          return (
            <article
              key={month.key}
              data-month-row
              className="relative min-h-[32rem] overflow-hidden rounded-[2rem]"
            >
              <div className={`absolute inset-0 ${month.mood}`} data-month-bg />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.10)_100%)]" />

              <div className="relative z-10 grid h-full grid-cols-1 gap-6 px-6 py-8 md:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-2xl" data-month-copy>
                  <p
                    className="text-[3.5rem] font-black leading-none tracking-tight text-transparent bg-clip-text bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(255,235,185,1)_42%,rgba(194,226,255,1)_100%)] drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:text-[4.5rem] lg:text-[5.4rem]"
                    data-month-title
                  >
                    {month.month}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-white/55">
                    month {String(monthNumber).padStart(2, '0')}
                  </p>

                  <p className="mt-6 text-[2.2rem] font-semibold leading-none tracking-tight text-white sm:text-[3rem]">
                    {month.minutes}
                  </p>

                  <p className="mt-2 text-base text-white/72">
                    minutes
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/45">
                        top artist
                      </p>
                      <p className="mt-2 text-xl font-medium tracking-tight text-white sm:text-2xl">
                        {month.artist}
                      </p>
                      <p className="mt-1 text-sm text-white/65">
                        {month.artistMinutes} minutes
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/45">
                        top song
                      </p>
                      <p className="mt-2 text-lg font-medium tracking-tight text-white sm:text-xl">
                        {month.song}
                      </p>
                      <p className="mt-1 text-sm text-white/65">
                        {month.songArtist}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
  {photos.length > 1 ? (
    <div
      className="relative flex flex-col items-center gap-3 md:items-end md:-translate-x-4"
      data-month-photo-card
    >
      {photos.map((photoSrc, photoIndex) => (
        <div
          key={`${month.key}-photo-${photoIndex}`}
          className={`relative rounded-[1.4rem] border border-white/15 bg-white/10 p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm ${
            photoIndex === 1 ? 'md:-translate-x-8' : ''
          }`}
        >
          <img
            src={photoSrc}
            alt={`${month.month} ${photoIndex + 1}`}
            className="block h-auto max-h-[11rem] w-auto max-w-[10rem] rounded-[1rem] object-contain sm:max-h-[12.5rem] sm:max-w-[11rem] lg:max-h-[13rem] lg:max-w-[11.5rem]"
          />
        </div>
      ))}
    </div>
  ) : photos.length === 1 ? (
    <div
      className="relative md:-translate-x-14"
      data-month-photo-card
    >
      <div className="relative rounded-[1.4rem] border border-white/15 bg-white/10 p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        <img
          src={photos[0]}
          alt={`${month.month} photo`}
          className="block h-auto max-h-[13rem] w-auto max-w-[10.5rem] rounded-[1rem] object-contain sm:max-h-[14rem] sm:max-w-[11rem] lg:max-h-[15rem] lg:max-w-[11.5rem]"
        />
      </div>
    </div>
  ) : (
    <div className="h-[12rem] w-[10rem] rounded-[1.4rem] border border-white/10 bg-white/5 opacity-0" />
  )}
</div>
              </div>
            </article>
          );
        })}
      </section>
    ))}

    <section
      id="months-collapse"
      className="relative z-10 flex min-h-[60vh] items-center justify-center overflow-hidden px-8 py-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#d7e1ed_0%,#bcc9d8_100%)]" />
      <div
        className="relative z-10 flex h-[18rem] w-[18rem] items-center justify-center rounded-full bg-white/35 shadow-[0_30px_90px_rgba(0,0,0,0.14)] backdrop-blur-md"
        data-month-collapse
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-600">
            12 months
          </p>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            one year
          </p>
        </div>
      </div>
    </section>
  </div>
</section>

      <section
        id="habits"
        className="relative z-10 flex min-h-screen items-center overflow-hidden px-8 py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(134,170,255,0.16),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(98,220,201,0.14),transparent_22%),radial-gradient(circle_at_68%_78%,rgba(255,227,138,0.10),transparent_22%),linear-gradient(135deg,#071425_0%,#0b1d34_42%,#112946_100%)]" />

        <div
          className="absolute right-[12%] top-[22%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(163,206,255,0.18)_0%,rgba(163,206,255,0.08)_28%,transparent_68%)] blur-3xl"
          data-habits-orb
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <p
              className="mb-4 text-sm uppercase tracking-[0.3em] text-white/55"
              data-habits-copy
            >
              {habitsData.eyebrow}
            </p>

            <h2
              className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
              data-habits-copy
            >
              {habitsData.title}
            </h2>

            <p
              className="mt-6 text-lg leading-8 text-white/72 sm:text-xl"
              data-habits-copy
            >
              {habitsData.subtitle}
            </p>
          </div>

          <div
            className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:max-w-[42rem] md:justify-self-end md:translate-y-6"
            data-habits-grid
          >
            {habitsData.stats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[12rem] rounded-[1.7rem] border border-white/16 bg-[#2f4766]/88 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
                data-habit-card
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  {stat.label}
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
  id="genres"
  className="relative z-10 flex min-h-screen items-center overflow-hidden px-8 py-20"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(132,118,255,0.18),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(255,182,111,0.14),transparent_24%),radial-gradient(circle_at_62%_78%,rgba(103,221,189,0.10),transparent_22%),linear-gradient(135deg,#0b0f1d_0%,#121a31_42%,#1b2542_100%)]" />

  <div
    className="absolute left-[10%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(177,149,255,0.14)_0%,rgba(177,149,255,0.06)_28%,transparent_68%)] blur-3xl"
    data-genres-orb
  />

  <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[0.88fr_1.12fr]">
    <div className="max-w-2xl">
      <p
        className="mb-4 text-sm uppercase tracking-[0.3em] text-white/55"
        data-genres-copy
      >
        {genresData.eyebrow}
      </p>

      <h2
        className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        data-genres-copy
      >
        {genresData.title}
      </h2>

      <p
        className="mt-8 text-lg leading-8 text-white/72 sm:text-xl"
        data-genres-copy
      >
        {genresData.subtitle}
      </p>
    </div>

    <div
      className="relative h-[31rem] rounded-[2.4rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-sm"
      data-genres-stage
    >
      {genresData.masses.map((item) => (
        <div key={item.genre}>
          <div className={`absolute ${item.blobClass} z-0`} data-genre-mass>
            <img
              src={item.asset}
              alt={item.genre}
              className="h-auto w-full opacity-[0.72] mix-blend-screen blur-[1px]"
            />
          </div>

          <div
            className={`absolute ${item.cardClass} z-10 rounded-[1.9rem] border border-white/16 bg-[#18243c]/92 px-7 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.26)]`}
            data-genre-label
          >
            <p className="text-[0.95rem] uppercase tracking-[0.3em] text-white/48">
              {item.genre}
            </p>
            <p className="mt-4 text-[3.9rem] font-semibold leading-none tracking-tight text-white">
              {item.minutes}
            </p>
            <p className="mt-2 text-base text-white/65">minutes</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section
  id="genre-details"
  className="relative z-10 overflow-hidden px-8 pb-18 pt-2"
>
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#10182d_0%,#10182d_35%,#111a30_100%)]" />

  <div className="relative z-10 mx-auto mt-2 grid max-w-6xl gap-4 lg:grid-cols-[1.12fr_0.88fr]">
    <div className="grid gap-4 sm:grid-cols-2">
      {genresData.leaders.map((item) => (
        <div
          key={item.label}
          className="min-h-[14.5rem] rounded-[1.55rem] border border-white/14 bg-[#21314f]/88 p-5 shadow-[0_16px_46px_rgba(0,0,0,0.18)]"
          data-genre-card
        >
          <div className="flex h-full flex-col justify-between">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">
              {item.label}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.value}
                className="h-20 w-20 rounded-[1rem] object-cover shadow-lg"
              />

              <div className="min-w-0">
                <p className="text-[2.3rem] font-semibold leading-[1.04] tracking-tight text-white">
                  {item.value}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-[16rem] text-[1.02rem] leading-7 text-white/68">
              {item.sub}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="grid gap-4">
      {genresData.shifts.map((item) => (
        <div
          key={item.label}
          className="min-h-[10rem] rounded-[1.55rem] border border-white/14 bg-[#17253e]/88 p-5 shadow-[0_16px_46px_rgba(0,0,0,0.18)]"
          data-genre-card
        >
          <div className="flex h-full flex-col justify-between">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">
              {item.label}
            </p>

            <p className="mt-4 text-[3.2rem] font-semibold leading-none tracking-tight text-white">
              {item.value}
            </p>

            <p className="mt-4 max-w-[26rem] text-[1.02rem] leading-7 text-white/68">
              {item.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section
  id="past-years"
  className="relative z-10 h-screen overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(142,197,252,0.12),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(224,195,252,0.12),transparent_22%),radial-gradient(circle_at_70%_82%,rgba(255,210,120,0.10),transparent_22%),linear-gradient(135deg,#07111f_0%,#0c1728_42%,#101b2d_100%)]" />

  <div
    className="absolute left-[10%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(177,210,255,0.16)_0%,rgba(177,210,255,0.06)_30%,transparent_70%)] blur-3xl"
    data-past-years-orb
  />

  <div className="relative z-10 h-full px-8 py-10">
    <div className="mx-auto max-w-5xl">
      <p
        className="text-sm uppercase tracking-[0.3em] text-white/50"
        data-past-years-copy
      >
        Past Years
      </p>

      <h2
        className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl"
        data-past-years-copy
      >
        The run-up to 2025
      </h2>

      <p
        className="mt-4 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl"
        data-past-years-copy
      >
        Not every year needed a full scene. Just the parts that made 2025 make more sense.
      </p>
    </div>

    <div className="relative mx-auto h-[52rem] max-w-6xl">
      <div
        className="absolute left-0 top-[25%] h-[20rem] w-[4200px] -translate-y-1/2"
        data-timeline-track
      >
        <svg
          viewBox="0 0 4200 320"
          className="absolute left-0 top-0 h-full w-[4200px] overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M80 188 C 340 242, 720 92, 1120 126 S 1850 262, 2580 160 S 3200 58, 3650 142"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M170 188 C 340 242, 720 92, 1120 126 S 1850 262, 2580 160 S 3200 58, 3650 142"
            fill="none"
            stroke="rgba(255,255,255,0.78)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
            data-year-progress
          />
        </svg>

        {pastYearsTimeline.map((item) => (
          <div key={item.year}>
            <div
              className="absolute rounded-full border border-white/10 bg-[#13263d]/76 px-4 py-2 text-sm font-medium tracking-[0.24em] text-white/60 backdrop-blur-sm"
              style={{
                left: `${item.marker.x - 32}px`,
                top: `${item.marker.y - 58}px`,
                opacity: 0.58,
              }}
              data-year-chip
            >
              {item.year}
            </div>

            <div
              className="absolute h-6 w-6 rounded-full border border-white/35"
              style={{
                left: `${item.marker.x}px`,
                top: `${item.marker.y}px`,
                backgroundColor: item.accent,
                boxShadow: item.current
                  ? '0 0 34px rgba(132,255,196,0.22)'
                  : '0 0 18px rgba(255,255,255,0.12)',
              }}
              data-year-point
            >
              <div className="absolute inset-[5px] rounded-full bg-white/85" />
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {pastYearsTimeline.map((item) => (
          <div
            key={`${item.year}-panel`}
            className={`invisible absolute left-1/2 top-[1%] w-[22rem] -translate-x-1/2 -translate-y-[78%] rounded-[1.8rem] border p-7 opacity-0 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-md ${
              item.current
                ? 'border-white/18 bg-[#1b3149]/88'
                : 'border-white/12 bg-[#122035]/82'
            }`}
            data-year-panel
          >
            <div
              className="absolute inset-0 rounded-[1.8rem]"
              style={{
                background: `radial-gradient(circle at 20% 18%, ${item.accent} 0%, transparent 56%)`,
              }}
            />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-white/44">
                Year
              </p>

              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="text-5xl font-semibold tracking-tight text-white">
                  {item.year}
                </p>

                <p className="text-sm text-white/58">
                  {item.minutes} min
                </p>
              </div>

              <div className="mt-5 h-px w-full bg-white/10" />

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
                    Top Artist
                  </p>
                  <p className="mt-2 text-2xl font-medium tracking-tight text-white">
                    {item.topArtist}
                  </p>
                </div>

                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
                    Dominant Genre
                  </p>
                  <p className="mt-2 text-xl font-medium tracking-tight text-white/86">
                    {item.genre}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-[18rem] text-sm leading-6 text-white/64">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </main>
  );
}