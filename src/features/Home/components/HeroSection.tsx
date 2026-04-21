import { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { HERO_IMAGES, containerVariants, itemVariants } from '../data/homeData';
import { useHeroSlider } from '../hooks/useHeroSlider';
import Logo from '../../../components/Logo';

export const HeroSection = memo(() => {
  const heroIndex = useHeroSlider(HERO_IMAGES, 6000);

  return (
    <div className="relative min-h-[95vh] flex flex-col m-4 rounded-[2rem] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img 
          key={heroIndex}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          transition={{ 
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" }
          }}
          src={HERO_IMAGES[heroIndex]} 
          alt="Modern Architecture" 
          className="absolute inset-0 w-full h-full object-cover origin-center"
        />
      </AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black/40"
      ></motion.div>

      <nav className="relative z-10 flex items-center justify-between p-8 text-white">
        <Link to="/" className="flex items-center gap-2 w-1/3 group">
          <Logo className="h-[1.5rem] w-[1.5rem]" />
          <span className="font-bold text-2xl tracking-tighter group-hover:text-gray-300 transition-colors">ARCHCOS</span>
        </Link>
        <div className="hidden md:flex justify-center gap-8 text-sm font-medium w-1/3">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
          <Link to="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
          <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>
        <div className="flex justify-end w-1/3">
          <Link to="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-block">
            Executive Consultation
          </Link>
        </div>
      </nav>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex-1 flex flex-col justify-center p-8 md:p-16 max-w-4xl"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight">
          Visionary<br />Architectural<br />Solutions.
        </motion.h1>
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="bg-white text-black px-8 py-3.5 rounded-full font-semibold inline-flex items-center hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 duration-300">
            Initiate Executive Consultation
          </Link>
          <Link to="/inquiry" className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95 duration-300">
            Secure Your Vision
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row justify-end items-start lg:items-end gap-6 mt-auto">
        <div className="flex flex-wrap gap-3">
          <Link to="/portfolio" className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors">Modern</Link>
          <Link to="/portfolio" className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors">Sustainable</Link>
          <Link to="/portfolio" className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors">Minimalist</Link>
        </div>
      </div>
    </div>
  );
});
