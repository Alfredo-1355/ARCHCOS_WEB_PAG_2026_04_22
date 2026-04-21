import { memo } from 'react';
import { motion } from 'motion/react';
import { PenTool, Layers, ShieldCheck } from 'lucide-react';
import { containerVariants, itemVariants } from '../data/homeData';

export const ExpertiseSection = memo(() => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto bg-gray-50 rounded-[3rem] my-12"
    >
      <motion.div variants={itemVariants} className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-[#8CC63F] uppercase block mb-4">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">Crafting Your Legacy</h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          We offer a comprehensive suite of services designed to turn your ideal home into a tangible reality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Pillar 1: Conceptual Sketches */}
        <motion.div variants={itemVariants} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col h-full">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#1a1a1a] transition-colors duration-500 z-10 shrink-0">
            <PenTool className="w-6 h-6 text-[#1a1a1a] group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 z-10">Conceptual Sketches</h3>
          <p className="text-gray-500 leading-relaxed text-sm z-10 flex-grow">
            <strong className="text-[#1a1a1a] font-medium block mb-2">Where it all begins.</strong>
            Through freehand and computerized sketches, we capture the core essence of your project, translating your initial ideas into tangible, functional design concepts.
          </p>
          {/* Subtle gradient background on hover */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Pillar 2: Comprehensive Blueprints */}
        <motion.div variants={itemVariants} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col h-full">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#1a1a1a] transition-colors duration-500 z-10 shrink-0">
            <Layers className="w-6 h-6 text-[#1a1a1a] group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 z-10">Comprehensive Blueprints</h3>
          <div className="text-gray-500 leading-relaxed text-sm z-10 flex-grow">
            <strong className="text-[#1a1a1a] font-medium block mb-2">The foundation of great architecture.</strong>
            We create meticulously detailed blueprints that serve as the roadmap for your project. Our expertise covers:
            <ul className="mt-4 space-y-2 text-xs font-medium text-gray-400">
              <li className="flex items-center gap-2 before:content-['•'] before:text-[#8CC63F]">Proposed Site Plans</li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-[#8CC63F]">Floor Plans & Elevations</li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-[#8CC63F]">Structural & Electrical Plans</li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-[#8CC63F]">Garage Plans & Back Porches</li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-[#8CC63F]">Custom Homes & Additions</li>
            </ul>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Pillar 3: Plans, Permits & Compliance */}
        <motion.div variants={itemVariants} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col h-full">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#1a1a1a] transition-colors duration-500 z-10 shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#1a1a1a] group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 z-10">Plans & Permits</h3>
          <p className="text-gray-500 leading-relaxed text-sm z-10 flex-grow">
            <strong className="text-[#1a1a1a] font-medium block mb-2">Peace of mind, guaranteed.</strong>
            We ensure that all legal requirements and necessary permits are secured before construction begins. Our team expertly navigates local regulations so you can enjoy a smooth, efficient, and stress-free process from start to finish.
          </p>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

      </div>
    </motion.section>
  );
});
