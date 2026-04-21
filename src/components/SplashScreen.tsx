import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Show text after logo manifestation begins
    const textTimer = setTimeout(() => setIsTextVisible(true), 2800);
    
    // Signal completion after the full cinematic sequence
    const completeTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const textVariants = {
    hidden: { 
      opacity: 0, 
      letterSpacing: "0.2em",
      y: 10
    },
    visible: { 
      opacity: 1, 
      letterSpacing: "0.8em",
      y: 0,
      transition: { 
        duration: 2, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const welcomeVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 0.5, 
      y: 0,
      transition: { duration: 1.5, delay: 3.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background with Radial Vignette and Zoom-Out */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 6, ease: "easeOut" }} // Slow cinematic zoom
        className="absolute inset-0 bg-[#f8f9fa]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.04)_100%)]" />
      </motion.div>

      {/* Laser Scanning Lines */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[40%] left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#3B99D4]/30 to-transparent z-20"
      />
      <motion.div 
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
        className="absolute left-[50%] top-0 w-[0.5px] h-full bg-gradient-to-b from-transparent via-[#8CC63F]/30 to-transparent z-20"
      />

      {/* Architectural Particles (Convergence) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: (Math.random() - 0.5) * 1000, 
            y: (Math.random() - 0.5) * 1000,
            opacity: 0 
          }}
          animate={{ x: 0, y: 0, opacity: [0, 0.2, 0] }}
          transition={{ 
            duration: 3, 
            delay: Math.random() * 2, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="absolute w-1 h-1 bg-[#1a1a1a] rounded-full z-10"
        />
      ))}

      <div className="relative flex flex-col items-center z-10">
        {/* Large Logo with High-Motion Entrance */}
        <Logo 
          className="w-32 h-32 md:w-48 md:h-48 mb-16" 
          isIntro={true} 
        />

        {/* Brand and Welcome Message */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              {isTextVisible && (
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg md:text-xl font-bold text-[#1a1a1a] uppercase tracking-[0.8em] ml-[0.8em]"
                >
                  ARCHCOS
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            variants={welcomeVariants}
            initial="hidden"
            animate={isTextVisible ? "visible" : "hidden"}
            className="text-xs md:text-sm text-[#475569] font-medium tracking-[0.4em] uppercase"
          >
            Elevating Architectural Vision
          </motion.div>
        </div>

        {/* Minimalist Progress Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 280, opacity: 0.2 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"
        />
      </div>

      {/* Aesthetic Background Accents */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.03 }}
        transition={{ duration: 2.5, delay: 1.5 }}
        className="absolute top-1/4 left-0 w-full h-px bg-black origin-left"
      />
      <motion.div 
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.03 }}
        transition={{ duration: 2.5, delay: 1.8 }}
        className="absolute top-0 right-1/4 w-px h-full bg-black origin-top"
      />
    </motion.div>
  );
}
