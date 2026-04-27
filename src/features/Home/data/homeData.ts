import { Project } from '../types';

export const HERO_IMAGES = [
  "/projects/86-kings-lake-residence/cover.png",
  "/projects/harmony-reserve/BSH_00.png",
  "/projects/venue-creekside-arts/LS_03.png",
  "/projects/elmfield-drive-studio/R-01.png",
  "/projects/pasteko/PORTADA DE PASTEKO 02.png",
  "/projects/horseshoe/EXT-01.png",
  "/projects/del-pueblo-funeral-home/EXT-04.png",
  "/projects/road-west-racket-social-club/R-03.png",
  "/projects/venue-creekside-arts/EXT-14.png"
];

export const FEATURED_PROJECTS: Project[] = [
  { id: 'harmony-reserve', title: 'Harmony Reserve', category: 'Master Site Development', location: 'Magnolia, TX', img: '/projects/harmony-reserve/BSH_00.png' },
  { id: 'del-pueblo-funeral-home', title: 'Del Pueblo Funeral Home', category: 'Commercial Institutional', location: 'Houston, TX', img: '/projects/del-pueblo-funeral-home/EXT-01.png' },
  { id: 'horseshoe', title: 'Horseshoe - Unit A', category: 'High-End BIM', location: 'Canyon Lake, TX', img: '/projects/horseshoe/EXT-01.png' },
  { id: 'venue-creekside-arts', title: 'Venue Creekside Arts', category: 'Commercial Arts', location: 'Tomball, TX', img: '/projects/venue-creekside-arts/EXT-14.png' },
  { id: '86-kings-lake-residence', title: '86 Kings Lake Residence', category: 'Luxury Residential', location: 'Humble, TX', img: '/projects/86-kings-lake-residence/cover.png' }
];

export const POPULAR_DESIGNS: Project[] = [
  { id: 'horseshoe', title: 'Horseshoe - Unit A', location: 'Canyon Lake, TX', price: '$950K', img: '/projects/horseshoe/EXT-01.png' },
  { id: 'venue-creekside-arts', title: 'Venue Creekside Arts', location: 'Tomball, TX', price: '$4.2M', img: '/projects/venue-creekside-arts/EXT-14.png' },
  { id: 'road-west-racket-social-club', title: 'Road West Racket Social Club', location: 'Houston, TX', price: '$1M', img: '/projects/road-west-racket-social-club/R-03.png' },
  { id: 'grand-lakes-padel', title: 'Grand Lakes Padel', location: 'Houston, TX', price: '$2.6M', img: '/projects/grand-lakes-padel/EXT-01.jpg' }
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};
