import PageWrapper from '../components/PageWrapper';
import AuthorityStrip from '../components/AuthorityStrip';
import ImpactMetrics from '../components/ImpactMetrics';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../features/Home/data/homeData';

import { HeroSection } from '../features/Home/components/HeroSection';
import { ProjectCarousel } from '../features/Home/components/ProjectCarousel';
import { ServicesSection } from '../features/Home/components/ServicesSection';
import { PopularDesignsGrid } from '../features/Home/components/PopularDesignsGrid';
import { ProcessSection } from '../features/Home/components/ProcessSection';
import { CallToAction } from '../features/Home/components/CallToAction';
import { AboutSection } from '../features/Home/components/AboutSection';
import { ExpertiseSection } from '../features/Home/components/ExpertiseSection';
import { Footer } from '../features/Home/components/Footer';

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
        <HeroSection />
        
        <AuthorityStrip />

        {/* Projects Section Wrapper */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          id="projects" 
          className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Featured Projects</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-[1.1] tracking-tight text-[#1a1a1a]">
                Come here and explore our<br />architectural legacy.
              </h2>
            </div>
            <Link to="/portfolio" className="bg-[#2A3B2C] text-white px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#1f2c21] transition-all hover:scale-105 duration-300 shrink-0">
              Explore Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <ProjectCarousel />
        </motion.section>

        <ServicesSection />
        
        <ImpactMetrics />

        <PopularDesignsGrid />

        <ProcessSection />

        <CallToAction />

        <TestimonialCarousel />

        <AboutSection />
        
        <ExpertiseSection />

        <Footer />
      </div>
    </PageWrapper>
  );
}
