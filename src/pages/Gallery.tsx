import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import img1 from '../assets/IMG_20260530_200224 (1).jpg';
import img2 from '../assets/IMG_20260530_200434 (1).jpg';
import img3 from '../assets/IMG_20260531_143156.jpg';
import img4 from '../assets/IMG-20260531-WA0084 (1).jpg';
import img5 from '../assets/IMG-20260531-WA0095 (1).jpg';

const images = [
  { src: img1, alt: 'Awards & Recognition', category: 'Awards & Recognition' },
  { src: img2, alt: 'Reception Desk', category: 'Reception' },
  { src: img3, alt: 'Location Map', category: 'Location Map' },
  { src: img4, alt: 'Clinic Exterior', category: 'Clinic Entrance' },
  { src: img5, alt: 'Pediatric Dental Care', category: 'Patient Care' },
];

export const Gallery = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO 
        title="Clinic Gallery | MV Dental Clinic"
        description="Take a visual tour of MV Dental Clinic in Salem. View our state-of-the-art facilities, modern dental equipment, and comforting pediatric areas."
      />
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 mb-16 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Clinic Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dark/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-white drop-shadow-md"
          >
            Clinic Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            A look inside our state-of-the-art facilities.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-xl border-[6px] border-white group cursor-pointer"
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold tracking-wide shadow-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
