// app/work/projects.ts
export type MediaType = 'image' | 'video' | 'audio';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

export type Project = {
  id: number;
  title: string;
  type: MediaType;
  mediaSrc: string;
  client: string;
  location: string;
  description: string;
  gallery?: MediaItem[];
};



// helper to turn client name into a URL slug
export function clientToSlug(client: string): string {
  return client
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumerics → -
    .replace(/(^-|-$)/g, ''); // trim leading/trailing -
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Montel McKenzie - MIC'D",
    type: 'video',
    mediaSrc: '/work/video-1.mp4',
    client: 'Montel McKenzie',
    location: 'London',
    description: "Montel McKenzie - Mic'd up for baller league UK",
    gallery:[{type:"image", src:"/work/image-22.jpg"}, {type:"image", src:"/work/image-23.jpg"}, {type:"image", src:"/work/image-24.jpg"}]
  },
  {
    id: 2,
    title: 'UCL Moments',
    type: 'image',
    mediaSrc: '/work/image-2.jpg',
    client: 'Inter Milan',
    location: 'Rotterdam',
    description:
      "Moments captured from Inter Milan's champion's league win over Feyenoord ",
    gallery:[{type:"image", src:"/work/image-19.jpg"}, {type:"image", src:"/work/image-25.jpg"}, {type:"image", src:"/work/image-26.jpg"},{type:"image", src:"/work/image-27.jpg"}]
  },
  {
    id: 3,
    title: 'Jadon Sancho',
    type: 'image',
    mediaSrc: '/work/image-3.jpg',
    client: 'Chelsea FC',
    location: 'London',
    description: 'Warm up flicks with Jadon Sancho and the chelsea squad',
    gallery:[{type:"image", src:"/work/image-20.jpg"}, {type:"image", src:"/work/image-21.jpg"}]
  },
  {
    id: 4,
    title: 'BVB FC Tiktok',
    type: 'video',
    mediaSrc: '/work/video-4.mp4',
    client: 'BVB FC',
    location: 'Dortmund Germany',
    description: 'Up Close at Signal Iduna Park',
    gallery:[{type:"video", src:"/work/video-28.mp4"}]
  },
  {
    id: 5,
    title: 'Work In The Sun',
    type: 'image',
    mediaSrc: '/work/image-5.jpg',
    client: 'Sam',
    location: 'Remote',
    description: 'Off Season training',
    gallery:[{type:"image", src:"/work/image-29.jpg"},{type:"image", src:"/work/image-30.jpg"}]
  },
  {
    id: 6,
    title: 'Instagram Ready',
    type: 'image',
    mediaSrc: '/work/image-6.jpg',
    client: 'Serhou Guirassy',
    location: 'Remote',
    description: 'Instagram story work for Serhou Guirassy ',
    gallery:[{type:"image", src:"/work/image-31.jpg"},{type:"image", src:"/work/image-32.jpg"}]
  },
  {
    id: 7,
    title: "Warm Up's with Azeem Abulai ",
    type: 'image',
    mediaSrc: '/work/image-7.jpg',
    client: 'Azeem Abulai',
    location: 'Leyton, London',
    description: "Perfect still's as Azeem get's ready",
    gallery:[{type:"image", src:"/work/image-33.jpg"},{type:"image", src:"/work/image-34.jpg"},{type:"image", src:"/work/image-35.jpg"},]
  },
  {
    id: 8,
    title: 'Behind The Scenes',
    type: 'video',
    mediaSrc: '/work/video-8.mp4',
    client: 'Farid Alfa',
    location: 'Leverkusen, Germany',
    description: 'A day in the life with Farid Alfa',
    gallery:[{type:"image", src:"/work/image-36.jpg"}, {type:"image", src:"/work/image-37.jpg"}, {type:"image", src:"/work/image-38.jpg"}]
  },
  {
    id: 9,
    title: 'Focus',
    type: 'image',
    mediaSrc: '/work/image-9.jpg',
    client: 'Xavi Simons',
    location: 'Leipzig, Germany',
    description: "Close up's as Xavi Simon's Locks in",
    gallery:[{type:"image", src:"/work/image-39.jpg"}, {type:"image", src:"/work/image-40.jpg"}]
  },
  {
    id: 10,
    title: '1V1 Tournament',
    type: 'image',
    mediaSrc: '/work/image-10.jpg',
    client: 'ISHOWSPEED',
    location: 'London',
    description:
      "Engery captured from ISHOWSPEED's first UK stream of 2025",
      gallery:[{type:"image", src:"/work/image-41.jpg"}, {type:"image", src:"/work/image-42.jpg"}, {type:"image", src:"/work/image-43.jpg"}, {type:"image", src:"/work/image-44.jpg"}]
  },
  {
    id: 11,
    title: 'Beautiful Marbella',
    type: 'video',
    mediaSrc: '/work/video-11.mp4',
    client: 'Marbella Scenes',
    location: 'Marbella, Spain',
    description: 'Stunning Scenery from Marbella ',
    gallery:[{type:"image", src:"/work/image-45.jpg"}, {type:"image", src:"/work/image-46.jpg"}, {type:"image", src:"/work/image-47.jpg"}]
  },
  {
    id: 12,
    title: 'Antonio Nusa',
    type: 'image',
    mediaSrc: '/work/image-12.jpg',
    client: 'Antonio Nusa',
    location: 'Germany',
    description: 'Matchday stills with Antonio Nusa',
    gallery:[{type:"image", src:"/work/image-48.jpg"}, {type:"image", src:"/work/image-49.jpg"}]
  },
  {
    id: 13,
    title: 'Samuel Lling-Junior',
    type: 'image',
    mediaSrc: '/work/image-13.jpg',
    client: 'Samuel Lling-Junior',
    location: 'London',
    description:
      'Bulding greatness - afternoon training session',
      gallery:[{type:"image", src:"/work/image-50.jpg"}, {type:"image", src:"/work/image-51.jpg"}]
  },
  {
    id: 14,
    title: 'Pitchside Perspectives',
    type: 'video',
    mediaSrc: '/work/video-14.mp4',
    client: 'Baller League UK',
    location: 'London',
    description:
      'Pitchside scenes from baller league UK',
      gallery:[{type:"video", src:"/work/video-52.mp4"},{type:"image", src:"/work/image-53.jpg"},]
  },
  {
    id: 15,
    title: 'PSG X Aston Villa - Barcola',
    type: 'image',
    mediaSrc: '/work/image-18.jpg',
    client: 'PSG',
    location: 'Paris, France',
    description:
      "Champions league games haven't looked cleaner - still shot of Bradley Barcola.",
      gallery:[{type:"image", src:"/work/image-54.jpg"},{type:"image", src:"/work/image-55.jpg"}, {type:"image", src:"/work/image-56.jpg"}]
  },
  {
    id: 16,
    title: 'Noa Lang - Off Season',
    type: 'image',
    mediaSrc: '/work/image-16.jpg',
    client: 'Noa Lang',
    location: 'Marbella',
    description:
      "Still shot from one of  Noa Lang's off season training sessions in marbella",
      gallery:[{type:"image", src:"/work/image-57.jpg"}, {type:"image", src:"/work/image-58.jpg"}]
  },
  {
    id: 17,
    title: 'Noni Madueke',
    type: 'image',
    mediaSrc: '/work/image-17.jpg',
    client: 'Noni Madueke',
    location: 'London',
    description:
      "Straight to Instagram - A private shoot with Aresnal Star",
      gallery:[{type:"image", src:"/work/image-59.jpg"}, {type:"image", src:"/work/image-60.jpg"}]
  },
  {
    id: 18,
    title: 'Overseas Training',
    type: 'video',
    mediaSrc: '/work/video-15.mp4',
    client: 'Jamie Gittens',
    location: 'Switzerland',
    description:
      "Behnind the scenes clips of Jamie Gitten's and the BVB FC squad's switzerland training session",
  },
];
