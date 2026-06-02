import { motion } from 'framer-motion';
import blogImg1 from '../../assets/WhatsApp Image 2026-06-02 at 9.11.57 AM.jpeg';
import blogImg2 from '../../assets/WhatsApp Image 2026-06-02 at 9.11.58 AM (1).jpeg';
import blogImg3 from '../../assets/WhatsApp Image 2026-06-02 at 9.11.58 AM (2).jpeg';
import blogImg4 from '../../assets/WhatsApp Image 2026-06-02 at 9.11.58 AM.jpeg';

const blogImages = [
  blogImg1, blogImg2, blogImg3, blogImg4
];

export const PatientTreatmentBlog = () => {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Latest Cases</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black text-dark">Patient Treatment Blog</h3>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            Browse through some of our recent successful patient treatments and smile transformations.
          </p>
        </div>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-hidden py-6 bg-white/50 border-y border-dark/5">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-33.33333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Group 1 */}
          <div className="flex gap-6 pr-6 px-3">
            {blogImages.map((img, idx) => (
              <div key={`g1-${idx}`} className="w-[280px] md:w-[360px] aspect-[4/3] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white bg-white group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <img src={img} alt="Patient Treatment" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          
          {/* Group 2 */}
          <div className="flex gap-6 pr-6">
            {blogImages.map((img, idx) => (
              <div key={`g2-${idx}`} className="w-[280px] md:w-[360px] aspect-[4/3] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white bg-white group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <img src={img} alt="Patient Treatment" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          
          {/* Group 3 */}
          <div className="flex gap-6 pr-6">
            {blogImages.map((img, idx) => (
              <div key={`g3-${idx}`} className="w-[280px] md:w-[360px] aspect-[4/3] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white bg-white group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <img src={img} alt="Patient Treatment" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
