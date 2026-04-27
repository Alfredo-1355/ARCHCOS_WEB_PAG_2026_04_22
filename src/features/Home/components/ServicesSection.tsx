import { memo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '../data/homeData';

export const ServicesSection = memo(() => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="services" 
      className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Services</span>
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 gap-8">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight max-w-xl">Our tailored architectural designs just for you</h2>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed md:mt-4">Experience the difference with our exceptional and personalized service! We prioritize each client's unique needs to deliver spaces that inspire.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <motion.div variants={itemVariants} className="md:col-span-7 relative h-72 md:h-96 rounded-2xl overflow-hidden group">
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src="/projects/86-kings-lake-residence/cover.png" alt="Residential" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-between p-8">
            <span className="text-white font-medium text-2xl">Residential</span>
            <Link to="/services/residential" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">See Details</Link>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="md:col-span-5 relative h-72 md:h-96 rounded-2xl overflow-hidden group">
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src="/projects/venue-creekside-arts/EXT-14.png" alt="Commercial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-between p-8">
            <span className="text-white font-medium text-2xl">Commercial</span>
            <Link to="/services/commercial" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">See Details</Link>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="md:col-span-5 relative h-72 md:h-96 rounded-2xl overflow-hidden group">
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src="/projects/southline-residence/R-01.jpg" alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-between p-8">
            <span className="text-white font-medium text-2xl">Interior</span>
            <Link to="/services/interior" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">See Details</Link>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="md:col-span-7 relative h-72 md:h-96 rounded-2xl overflow-hidden group">
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src="/projects/venue-creekside-arts/LS_03.png" alt="Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-between p-8">
            <span className="text-white font-medium text-2xl">Landscape</span>
            <Link to="/services/landscape" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">See Details</Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});
