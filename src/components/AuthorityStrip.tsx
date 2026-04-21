import React from 'react';
import { motion } from 'motion/react';

const partners = [
  { name: 'AUTODESK BIM', icon: '🏛️' },
  { name: 'LEED CERTIFIED', icon: '🍃' },
  { name: 'RIBA ALIGNED', icon: '📐' },
  { name: 'CORONA RENDER', icon: '✨' },
  { name: 'ISO 9001', icon: '✅' }
];

export default function AuthorityStrip() {
  return (
    <div className="py-12 bg-white/50 backdrop-blur-sm border-y border-gray-100 mt-[-2rem] mb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {partners.map((partner) => (
            <motion.div 
              key={partner.name}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 filter grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <span className="text-xl">{partner.icon}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#1a1a1a]">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
