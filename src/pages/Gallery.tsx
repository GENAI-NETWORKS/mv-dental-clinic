import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import img1 from '../assets/MR.SRINIVASAN 39 YRS 02_page-0001.jpg';
import img2 from '../assets/MR.SRINIVASAN 40Y M OPG IMAGE 2_page-0001.jpg';

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-dark mb-4">Clinical Cases</h2>
          <p className="text-muted max-w-2xl mx-auto">Recent implant placements and prosthetic restorations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border-[6px] border-white group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img src={img1} alt="After placement of three implants" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-6 pt-20">
                <h3 className="text-white font-bold text-xl">After placement of three implants</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl border-[6px] border-white group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img src={img2} alt="After final fixed Prosthesis" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-6 pt-20">
                <h3 className="text-white font-bold text-xl">After final fixed Prosthesis</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
