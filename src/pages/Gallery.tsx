import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import img1 from '../assets/IMG_20260530_200224 (1).jpg';
import img2 from '../assets/IMG_20260530_200434 (1).jpg';
import img3 from '../assets/IMG_20260531_143156.jpg';
import img4 from '../assets/IMG-20260531-WA0084 (1).jpg';
import img5 from '../assets/IMG-20260531-WA0095 (1).jpg';
import img6 from '../assets/MR.SRINIVASAN 39 YRS 02_page-0001.jpg';
import img7 from '../assets/MR.SRINIVASAN 40Y M OPG IMAGE 2_page-0001.jpg';
import img8 from '../assets/image copy 5.png';
import img9 from '../assets/image copy 4.png';
import blogImg1 from '../assets/WhatsApp Image 2026-06-02 at 9.11.57 AM.jpeg';
import blogImg2 from '../assets/WhatsApp Image 2026-06-02 at 9.11.58 AM (1).jpeg';
import blogImg3 from '../assets/WhatsApp Image 2026-06-02 at 9.11.58 AM (2).jpeg';
import blogImg4 from '../assets/WhatsApp Image 2026-06-02 at 9.11.58 AM.jpeg';
import blogImg5 from '../assets/WhatsApp Image 2026-06-02 at 11.02.06 AM.jpeg';
import blogImg6 from '../assets/WhatsApp Image 2026-06-02 at 11.02.06 AM (1).jpeg';
import blogImg7 from '../assets/image copy 6.png';

const environmentImages = [
  { src: img1, alt: 'Awards & Recognition', category: 'Awards & Recognition' },
  { src: img2, alt: 'Reception Desk', category: 'Reception' },
  { src: img3, alt: 'Location Map', category: 'Location Map' },
  { src: img4, alt: 'Clinic Exterior', category: 'Clinic Entrance' },
  { src: img5, alt: 'Pediatric Dental Care', category: 'Patient Care' },
  { src: img9, alt: 'Treatment Area', category: 'Treatment Area' },
];

const treatmentImages = [
  { src: img6, alt: 'After placement of three implants', category: 'Implants' },
  { src: img7, alt: 'After final fixed Prosthesis', category: 'Prosthesis' },
  { src: img8, alt: 'Post treatment anterior teeth', category: 'Anterior Teeth' },
  { src: blogImg1, alt: 'Patient Treatment', category: 'Clinical Case' },
  { src: blogImg2, alt: 'Patient Treatment', category: 'Clinical Case' },
  { src: blogImg3, alt: 'Patient Treatment', category: 'Clinical Case' },
  { src: blogImg4, alt: 'Patient Treatment', category: 'Clinical Case' },
  { src: blogImg5, alt: 'Patient Treatment', category: 'Clinical Case' },
  { src: blogImg6, alt: 'Patient Treatment', category: 'Clinical Case' },
  { src: blogImg7, alt: 'Patient Treatment', category: 'Clinical Case' },
];

export const Gallery = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO 
        title="Clinic Gallery | MV Dental Clinic"
        description="Take a visual tour of MV Dental Clinic in Salem. View our state-of-the-art facilities, modern dental equipment, and comforting pediatric areas."
      />
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
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

      <div className="mb-20">
        <BeforeAfterSection />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-dark mb-4">Clinic Environment</h2>
          <p className="text-muted max-w-2xl mx-auto">Experience our modern, comfortable, and state-of-the-art dental facilities designed for your utmost care.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {environmentImages.map((img, idx) => (
            <motion.div
              key={`env-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-xl border-[6px] border-white group cursor-pointer"
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end justify-center pb-6">
                <span className="text-white font-bold tracking-wide shadow-sm">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-dark mb-4">Patient Treatment Blog</h2>
          <p className="text-muted max-w-2xl mx-auto">Browse through some of our recent successful patient treatments and smile transformations.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {treatmentImages.map((img, idx) => (
            <motion.div
              key={`treat-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-xl border-[6px] border-white group cursor-pointer"
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end justify-center pb-6">
                <span className="text-white font-bold tracking-wide shadow-sm">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
};
