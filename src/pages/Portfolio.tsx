import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import PageWrapper from '../components/PageWrapper';

// --- Types & Mock Data ---
type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  thumbnail: string;
};

const PROJECTS: Project[] = [
  {
    id: 'harmony-reserve',
    title: 'HARMONY RESERVE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/harmony-reserve/BSH_00.png',
  },
  {
    id: 'del-pueblo-funeral-home',
    title: 'DEL PUEBLO FUNERAL HOME',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'HOUSTON, TX',
    thumbnail: '/projects/del-pueblo-funeral-home/EXT-01.png',
  },
  {
    id: 'horseshoe',
    title: 'HORSESHOE - UNIT A',
    category: 'BIM',
    location: 'CANYON LAKE, TX',
    thumbnail: '/projects/horseshoe/EXT-01.png',
  },
  {
    id: 'venue-creekside-arts',
    title: 'VENUE CREEKSIDE ARTS',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'TOMBALL, TX',
    thumbnail: '/projects/venue-creekside-arts/EXT-14.png',
  },
  {
    id: 'grand-lakes-padel',
    title: 'GRAND LAKES PADEL',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'HOUSTON, TX',
    thumbnail: '/projects/grand-lakes-padel/EXT-01.jpg',
  },
  {
    id: 'empire-cookies',
    title: 'EMPIRE COOKIES',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'HOUSTON, TX',
    thumbnail: '/projects/empire-cookies/R-19.png',
  },
  {
    id: 'road-west-racket-social-club',
    title: 'ROAD WEST RACKET SOCIAL CLUB',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'HOUSTON, TX',
    thumbnail: '/projects/road-west-racket-social-club/R-03.png',
  },
  {
    id: '86-kings-lake-residence',
    title: '86 KINGS LAKE RESIDENCE',
    category: 'RESIDENTIAL',
    location: 'HUMBLE, TX',
    thumbnail: '/projects/86-kings-lake-residence/cover.png',
  },
  {
    id: 'velasquez-residence',
    title: 'VELASQUEZ RESIDENCE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/velasquez-residence/cover.jpg',
  },
  {
    id: 'southline-residence',
    title: 'SOUTHLINE RESIDENCE',
    category: 'RESIDENTIAL',
    location: 'CONROE, TX',
    thumbnail: '/projects/southline-residence/cover.jpg',
  },
  {
    id: 'pasteko',
    title: 'PASTEKO',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'COMMERCIAL PROJECT',
    thumbnail: '/projects/pasteko/PORTADA DE PASTEKO 02.png',
  },
  {
    id: 'elmfield-drive-studio',
    title: 'MAKE ART - STUDIO',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'SPRING, TX',
    thumbnail: '/projects/elmfield-drive-studio/R-01.png',
  },
  {
    id: 'express-tire-shop',
    title: 'EXPRESS TIRE SHOP',
    category: 'COMMERCIAL ROLLOUTS',
    location: 'CONROE, TX',
    thumbnail: '/projects/express-tire-shop/01.jpg',
  },
  {
    id: 'london',
    title: 'LONDON HOUSE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/london/R-01.png',
  },
  {
    id: 'paris',
    title: 'PARIS HOUSE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/paris/R-01.png',
  },
  {
    id: 'melbourne',
    title: 'MELBOURNE HOUSE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/melbourne/EXT-01.jpg',
  },
  {
    id: 'amsterdam',
    title: 'AMSTERDAM HOUSE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/amsterdam/EXT-01.jpg',
  },
  {
    id: 'auckland',
    title: 'AUCKLAND HOUSE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/auckland/EXT-01.png',
  },
  {
    id: 'barcelona',
    title: 'BARCELONA HOUSE',
    category: 'RESIDENTIAL',
    location: 'MAGNOLIA, TX',
    thumbnail: '/projects/barcelona/EXT-01.png',
  }
];

const FILTERS = [
  'ALL',
  'BIM',
  'COMMERCIAL ROLLOUTS',
  'RESIDENTIAL'
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a] relative overflow-hidden flex flex-col">
        {/* Subtle Geometric Network Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        >
          <svg className="absolute w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                <circle cx="100" cy="40" r="1.5" fill="currentColor" />
                <circle cx="40" cy="100" r="1.5" fill="currentColor" />
                <circle cx="110" cy="110" r="1.5" fill="currentColor" />
                <line x1="20" y1="20" x2="100" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="20" x2="40" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="40" x2="40" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="40" x2="110" y2="110" stroke="currentColor" strokeWidth="0.5" />
                <line x1="40" y1="100" x2="110" y2="110" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
          </svg>
        </motion.div>

        {/* Navigation Bar */}
        <nav className="relative z-10 flex items-center justify-between p-8 text-black max-w-[1400px] mx-auto w-full">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="h-[1.5rem] w-[1.5rem]" />
            <span className="font-bold text-2xl tracking-tighter group-hover:text-gray-600 transition-colors">ARCHCOS</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/#projects" className="hover:text-gray-600 transition-colors">Projects</Link>
            <Link to="/portfolio" className="hover:text-gray-600 transition-colors">Portfolio</Link>
            <Link to="/#services" className="hover:text-gray-600 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
          </div>
          <Link to="/contact" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors inline-block">
            Executive Consultation
          </Link>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 py-16 flex-1 w-full">
          
          {/* Header & Filters */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-[#1a1a1a] mb-10">OUR PROJECTS</h1>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {FILTERS.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-[#1a1a1a] text-white shadow-md' 
                      : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-[#1a1a1a]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group cursor-pointer"
                >
                  <Link to={`/project/${project.id}`} className="block relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.id === 'empire-cookies' ? 'object-bottom' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Card Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-medium tracking-wider text-white mb-2 transition-colors drop-shadow-md">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-gray-300 uppercase">
                        <MapPin className="w-3 h-3 text-white" />
                        {project.location}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <div className="mt-32 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-[#1a1a1a] mb-8">
              READY TO INNOVATE?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-3 text-[#1a1a1a] hover:text-gray-600 font-bold tracking-widest text-sm uppercase transition-colors group">
              Initiate Executive Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-200 bg-gray-50 py-12 px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="h-[1.5rem] w-[1.5rem] text-[#1a1a1a]" />
              <span className="font-bold text-lg tracking-widest text-[#1a1a1a] group-hover:text-gray-600 transition-colors">ARCHCOS</span>
            </Link>
            
            <div className="flex flex-wrap justify-center gap-8 text-xs font-medium tracking-widest text-gray-500">
              <span>HOUSTON, TX</span>
              <span>DALLAS, TX</span>
              <span>DURANGO, MX</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-[#1a1a1a] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1a1a1a] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1a1a1a] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1a1a1a] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
}
