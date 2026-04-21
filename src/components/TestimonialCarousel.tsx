import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ARCHCOS transformed our complex urban requirements into a seamless, visionary reality. Their BIM expertise is unmatched.",
    author: "Ing. Roberto Valdez",
    role: "CEO, Skyline Developments"
  },
  {
    quote: "The level of design fidelity and technical precision they bring to each project is exactly what a high-stakes investment requires.",
    author: "Elena Garces",
    role: "Director, GreenHouse Residential"
  },
  {
    quote: "Working with a firm that understands both architectural legacy and digital future is a game-changer.",
    author: "Marcus Thorne",
    role: "Principal Architect, Nexus Hub"
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="flex flex-col items-center">
          <Quote className="w-12 h-12 text-[#3B99D4]/20 mb-12" />
          
          <div className="relative h-[250px] md:h-[180px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center"
              >
                <p className="text-2xl md:text-3xl font-medium text-[#1a1a1a] text-center italic leading-relaxed mb-12">
                  "{testimonials[index].quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-12 mt-20">
            <button onClick={prev} className="p-2 hover:text-[#3B99D4] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-[#3B99D4]' : 'w-2 bg-gray-100'}`} 
                />
              ))}
            </div>
            <button onClick={next} className="p-2 hover:text-[#3B99D4] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
