import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { ContactSection } from '../components/sections/ContactSection';

export const Contact = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO 
        title="Contact Us | MV Dental Clinic in Salem"
        description="Book your dental appointment at MV Dental Clinic in Salem. Get our location, contact details, and clinic timings for expert pediatric and family care."
      />
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/85 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-white drop-shadow-md"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            We're here to answer your questions and schedule your visit.
          </motion.p>
        </div>
      </div>

      <div className="-mt-8 md:-mt-16 relative z-20">
        <ContactSection />
      </div>
      
      {/* Map Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=32,%20Vidhyalaya%20Road,%20Opp.%20TRS%20Mandapam,%20Salem%20-%20636%20007&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
