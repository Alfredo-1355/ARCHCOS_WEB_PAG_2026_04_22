import { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/homeData';
import { useProjectCarousel } from '../hooks/useProjectCarousel';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 800 : -800,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 800 : -800,
    opacity: 0,
  })
};

export const ProjectCarousel = memo(() => {
  const { currentIndex, direction, paginate, setIndex, visibleProjects } = useProjectCarousel(FEATURED_PROJECTS);

  return (
    <div className="relative w-full overflow-hidden py-12 px-4 md:px-0">
      <div className="relative h-[550px] md:h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="w-full">
                <Link to={`/project/${project.id}`} className="group cursor-pointer block h-full">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${project.id === 'empire-cookies' ? 'object-bottom' : ''}`}
                    />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <h3 className="font-bold text-xl text-[#1a1a1a] truncate pr-4">{project.title}</h3>
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 uppercase tracking-widest group-hover:text-black transition-colors shrink-0">
                      See More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Manual Controls */}
        <div className="absolute inset-x-0 inset-y-0 flex justify-between items-center z-20 pointer-events-none md:-mx-6">
          <button
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all pointer-events-auto active:scale-90 group border border-gray-100 -ml-4 md:ml-0"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all pointer-events-auto active:scale-90 group border border-gray-100 -mr-4 md:mr-0"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Modern Progress Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {FEATURED_PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === currentIndex ? 'w-12 bg-black' : 'w-2 bg-gray-200 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
});
