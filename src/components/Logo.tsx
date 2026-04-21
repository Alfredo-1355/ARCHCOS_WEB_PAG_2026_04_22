import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Logo({ 
  className = "w-8 h-8", 
  white = false,
  isIntro = false 
}: { 
  className?: string, 
  white?: boolean,
  isIntro?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation constants
  const draftingDuration = isIntro ? 2.5 : 1.5;
  const draftingDelay = isIntro ? 0.5 : 0;

  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={isIntro ? { 
        opacity: 0, 
        scale: 1.4, 
        filter: 'blur(20px) brightness(3) contrast(1.5)' // Increased intensity for more 'llamativa' feel
      } : { 
        opacity: 0, 
        scale: 0.95 
      }}
      animate={{ 
        opacity: 1, 
        scale: isIntro ? (isHovered ? 1.05 : 1) : (isHovered ? 1.8 : 1),
        filter: 'blur(0px) brightness(1) contrast(1)',
        y: isIntro ? (isHovered ? -2 : [0, -4, 0]) : (isHovered ? -4 : 0),
        zIndex: isHovered ? 50 : 1
      }}
      transition={{ 
        duration: isIntro ? 3 : 0.6, // Slower landing for more weight
        ease: [0.16, 1, 0.3, 1],
        delay: isIntro ? 0.2 : 0,
        y: isIntro ? { 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut" 
        } : { duration: 0.5 }
      }}
    >
      <motion.img 
        src="/logo.png" 
        alt="ARCHCOS Logo"
        className="w-full h-full object-contain pointer-events-none"
        animate={{ 
          filter: isHovered ? 'drop-shadow(0 0 30px rgba(59,153,212,0.6))' : 'drop-shadow(0 0 0px rgba(0,0,0,0))'
        }}
      />
      
      {/* Super Premium Shine Sweep (Intro only) */}
      {isIntro && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Layer 1: Fast Primary Shine */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
            initial={{ x: '-150%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 1.2, 
              delay: 2.2, 
              ease: "easeInOut" 
            }}
            style={{ mixBlendMode: 'overlay' }}
          />
          {/* Layer 2: Faster Rhythmic Secondary Shine */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            initial={{ x: '-150%' }}
            animate={{ x: '250%' }}
            transition={{ 
              duration: 0.8, 
              delay: 3.2, 
              ease: "easeInOut" 
            }}
            style={{ mixBlendMode: 'soft-light' }}
          />
        </div>
      )}
    </motion.div>
  );
}
