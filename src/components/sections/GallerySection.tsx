import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import img1 from '../../assets/IMG_20260530_200224 (1).jpg';
import img2 from '../../assets/IMG_20260530_200434 (1).jpg';
import img3 from '../../assets/IMG_20260531_143156.jpg';
import img4 from '../../assets/image copy 4.png';

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 md:py-16 bg-surface relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Take A Tour</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-dark">
              Our Clinic Environment
            </h3>
          </div>
          <Link to="/gallery">
            <Button variant="outline">View Full Gallery</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pb-12">
          
          {/* Column 1: Tall Image */}
          <div className="contents md:flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-none rounded-[2rem] overflow-hidden shadow-xl border-8 border-white h-fit relative group cursor-pointer bg-white"
            >
              <img src={img1} alt="Awards & Recognition" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end justify-center pb-8">
                <span className="bg-white text-dark font-black tracking-wide shadow-lg px-6 py-2 rounded-full">Awards & Recognition</span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Short Image + Text Filler */}
          <div className="contents md:flex flex-col h-full md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="order-2 md:order-none rounded-[2rem] overflow-hidden shadow-xl border-8 border-white h-fit relative group cursor-pointer bg-white shrink-0"
            >
              <img src={img2} alt="Reception Desk" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end justify-center pb-8">
                <span className="bg-white text-dark font-black tracking-wide shadow-lg px-6 py-2 rounded-full">Reception Desk</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-4 md:order-none rounded-[2rem] overflow-hidden shadow-xl border-8 border-white h-full relative group cursor-pointer bg-white"
            >
              <img src={img4} alt="Treatment Area" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end justify-center pb-8">
                <span className="bg-white text-dark font-black tracking-wide shadow-lg px-6 py-2 rounded-full">Treatment Area</span>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Short Image + Text Filler */}
          <div className="contents md:flex flex-col h-full md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-3 md:order-none rounded-[2rem] overflow-hidden shadow-xl border-8 border-white h-fit relative group cursor-pointer bg-white shrink-0"
            >
              <img src={img3} alt="Location Map" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end justify-center pb-8">
                <span className="bg-white text-dark font-black tracking-wide shadow-lg px-6 py-2 rounded-full">Location Map</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-5 md:order-none bg-secondary/5 rounded-[2rem] p-8 flex-1 flex flex-col justify-center border border-secondary/10 shadow-inner"
            >
              <h4 className="text-xl font-bold text-secondary mb-3">Prime Location</h4>
              <p className="text-dark/80 font-medium leading-relaxed">
                Conveniently located on Vidyalaya Road in Salem. Easy access with dedicated parking ensures your family's visit is hassle-free from start to finish.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
