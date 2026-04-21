import { memo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { POPULAR_DESIGNS, containerVariants, itemVariants } from '../data/homeData';

export const PopularDesignsGrid = memo(() => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto text-center bg-gray-50 rounded-[3rem] my-12"
    >
      <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-gray-500 uppercase">Portfolio</motion.span>
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight">Discover our most popular designs!</motion.h2>
      <motion.p variants={itemVariants} className="text-gray-500 text-sm max-w-2xl mx-auto mb-16">We recommend several beautiful architectural styles in certain locations, please choose your favorite design.</motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {POPULAR_DESIGNS.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Link to={`/project/${item.id}`} className="group cursor-pointer bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full block">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-5">
                <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg px-1 min-h-[3.5rem] flex items-center leading-tight mb-1">{item.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 mb-3 px-1">
                <MapPin className="w-3.5 h-3.5 text-[#8CC63F]" /> {item.location}
              </div>
              <div className="flex items-center gap-1 text-xs text-yellow-500 mb-4 px-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-gray-400 ml-1.5 font-medium">5.0/5</span>
              </div>
              <div className="font-semibold px-1 text-lg">
                {item.price} <span className="text-xs text-gray-400 font-normal">/ Est. Cost</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <Link to="/portfolio" className="mt-16 bg-[#2A3B2C] text-white px-8 py-3.5 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-[#1f2c21] transition-all hover:scale-105 duration-300">
          Explore more <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.section>
  );
});
