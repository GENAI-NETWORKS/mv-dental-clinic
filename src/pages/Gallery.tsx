import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';

export const Gallery = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO 
        title="Treatment Blogs | MV Dental Clinic"
        description="Browse through some of our recent successful patient treatments and smile transformations at MV Dental Clinic in Salem."
      />
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Clinic Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dark/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-white drop-shadow-md"
          >
            Treatment Blogs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Browse through some of our recent successful patient treatments and smile transformations.
          </motion.p>
        </div>
      </div>

      <div className="mb-20">
        <BeforeAfterSection />
      </div>
    </div>
  );
};
