import { memo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../data/homeData';

export const CallToAction = memo(() => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="pt-24 px-8 md:px-16 max-w-[1400px] mx-auto text-center flex flex-col items-center"
    >
      <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-gray-500 uppercase">Contact Us</motion.span>
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 mb-6 tracking-tight max-w-3xl leading-[1.1]">
        Ready to Bring Your Vision to Life?
      </motion.h2>
      <motion.p variants={itemVariants} className="text-gray-500 text-base mb-10 max-w-2xl mx-auto">
        Your dream home is waiting. Reach out to our team today to schedule a consultation and discover how Archcos can design the perfect space for your future.
      </motion.p>
      
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
        <Link to="/contact" className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium inline-flex items-center gap-3 shadow-md hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 duration-300">
          Start my project <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs"><Plus className="w-4 h-4" /></div>
        </Link>
        <Link to="/inquiry" className="bg-white border border-gray-200 text-black px-8 py-3.5 rounded-full text-sm font-medium inline-flex items-center gap-3 shadow-sm hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 duration-300">
          Instant Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="w-full h-[500px] mt-20 rounded-t-[3rem] overflow-hidden relative"
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/projects/86-kings-lake-residence/cover.png" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </motion.div>
    </motion.section>
  );
});
