import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { pediatricServices } from '../data/pediatricServices';

export const PediatricServices = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO 
        title="Pediatric Dentistry Services | Vaisha Children's Dental Center"
        description="Specialized pediatric dental care in Salem. From preventive sealants to sedation dentistry, we ensure a pain-free, comfortable experience for your child."
      />
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 mb-16 overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Pediatric Dentistry" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dark/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-white drop-shadow-md"
          >
            Pediatric Dentistry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Vaisha Children's Dental Center specialized care for your child's developing smile in a friendly, anxiety-free environment.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pediatricServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-transparent hover:border-secondary hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-text leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
