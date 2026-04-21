import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { SERVICES_DATA } from '../features/Services/data/servicesData';
import PageWrapper from '../components/PageWrapper';
import Logo from '../components/Logo';
import { CallToAction } from '../features/Home/components/CallToAction';
import { Footer } from '../features/Home/components/Footer';

export default function ServicePage() {
  const { serviceId } = useParams();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!serviceId || !SERVICES_DATA[serviceId]) {
    return <Navigate to="/" replace />;
  }

  const data = SERVICES_DATA[serviceId];

  // Parallax for Hero
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
        
        {/* PARALLAX HERO SECTION */}
        <div className="relative h-[80vh] w-full overflow-hidden flex flex-col m-4 mt-4 mx-4 rounded-[2rem] w-[calc(100%-2rem)]">
          <motion.div style={{ y }} className="absolute inset-0">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-[120%] object-cover -mt-[10%]" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40" />

          {/* Nav Overlay */}
          <nav className="relative z-10 flex items-center justify-between p-8 text-white">
            <Link to="/" className="flex items-center gap-2 w-1/3 group">
              <Logo className="h-[1.5rem] w-[1.5rem]" />
              <span className="font-bold text-2xl tracking-tighter group-hover:text-gray-300 transition-colors">ARCHCOS</span>
            </Link>
            <div className="hidden md:flex justify-center gap-8 text-sm font-medium w-1/3">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>
            <div className="flex justify-end w-1/3">
              <Link to="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-block">
                Executive Consultation
              </Link>
            </div>
          </nav>

          <div className="relative z-10 flex-1 flex flex-col justify-end p-8 md:p-16 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight"
            >
              {data.title}
            </motion.h1>
          </div>
        </div>

        {/* SECTION 1: THE WHAT */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 px-8 md:px-16 max-w-[1200px] mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <motion.span variants={itemVariants} className="text-xs font-bold tracking-[0.2em] text-[#8CC63F] uppercase mb-4 block">
                Overview
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] leading-tight">
                {data.whatSection.title}
              </motion.h2>
            </div>
            <div className="w-full lg:w-2/3">
              <motion.p variants={itemVariants} className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
                {data.whatSection.description}
              </motion.p>
              <motion.p variants={itemVariants} className="text-[#1a1a1a] font-medium text-lg leading-relaxed">
                {data.whatSection.hook}
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2: THE HOW (PROCESS) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 px-8 md:px-16 bg-gray-50 my-12"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div variants={itemVariants} className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">Process</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{data.howSection.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {data.howSection.steps.map((step, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative">
                  <div className="text-[#8CC63F] text-5xl font-bold opacity-20 mb-4 tracking-tighter">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  
                  {idx < data.howSection.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[1px] bg-gray-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION 3: THE EVIDENCE (GALLERY) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-[#8CC63F] uppercase block mb-4">Curated Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Project Showcase</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((imgSrc, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`relative rounded-3xl overflow-hidden group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'}`}
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={imgSrc} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA & FOOTER */}
        <CallToAction />
        <Footer />
        
      </div>
    </PageWrapper>
  );
}
