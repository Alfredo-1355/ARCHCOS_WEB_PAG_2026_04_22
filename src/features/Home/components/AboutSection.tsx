import { memo } from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../data/homeData';

export const AboutSection = memo(() => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.span variants={itemVariants} className="text-xs font-bold tracking-[0.2em] text-[#8CC63F] uppercase mb-4 block">
            Designing Spaces. Building Dreams.
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a] mb-8 leading-[1.15]">
            Others design houses;<br />at <span className="font-semibold">Archcos</span>, we craft homes.
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-6 text-gray-500 leading-relaxed text-base md:text-lg">
            <p>
              We believe a true home is a seamless blend of your lifestyle, your environment, and your vision. Since 2014, we have been transforming dreams into breathtaking, functional realities for families across North Houston, Texas.
            </p>
            <p>
              <strong className="text-[#1a1a1a] font-medium">From Vision to Reality: We Build It All.</strong> Archcos is a proudly family-owned custom home design firm. We know that building a custom home is one of life's most significant milestones. That's why our multidisciplinary team of highly trained designers works in close collaboration with you every step of the way.
            </p>
            <p>
              We don't just offer standard floor plans; we provide personalized spatial solutions tailored to the way you actually live. With passion, precision, and partnership, we ensure your journey from concept to move-in is as comfortable as the home we design for you.
            </p>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl">
          <motion.img 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 1.5, ease: "easeOut" }} 
            src="/projects/southline-residence/R-01.jpg" 
            alt="Archcos Custom Home Design" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
});
