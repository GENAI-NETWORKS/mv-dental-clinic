import { motion } from 'framer-motion';
import beforeImg from '../../assets/image.png';
import afterImg from '../../assets/image copy.png';

export const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Clinical Results</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black text-dark mb-4">Anterior esthetic restoration</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Witness the transformation. We utilize advanced esthetic techniques to restore both the function and natural beauty of your smile.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-full relative rounded-3xl overflow-hidden shadow-xl border-8 border-surface bg-surface mb-6 group">
              <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-md">
                Before
              </div>
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={beforeImg}
                  alt="Pre treatment - anterior caries teeth"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <h4 className="text-lg font-bold text-dark text-center">Pre treatment - anterior caries teeth</h4>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full relative rounded-3xl overflow-hidden shadow-xl border-8 border-surface bg-surface mb-6 group">
              <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-md">
                After
              </div>
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={afterImg}
                  alt="Esthetic Restored teeth"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <h4 className="text-lg font-bold text-primary text-center">Esthetic Restored teeth</h4>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
