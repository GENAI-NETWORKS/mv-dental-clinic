import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Stethoscope } from 'lucide-react';
import { pediatricServices } from '../../data/pediatricServices';
import { generalServices } from '../../data/generalServices';

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'pediatric' | 'general'>('pediatric');
  const currentServices = activeTab === 'pediatric' ? pediatricServices : generalServices;

  return (
    <section id="services" className="py-12 md:py-16 bg-surface scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black text-dark mb-8">Comprehensive Dental Care</h3>
          
          {/* Tabs */}
          <div className="inline-flex w-full sm:w-auto bg-white p-1 rounded-xl shadow-sm border border-gray-100 justify-between sm:justify-center">
            <button
              onClick={() => setActiveTab('pediatric')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-base font-bold transition-all duration-300 ${activeTab === 'pediatric' ? 'bg-secondary text-white shadow-md' : 'text-muted hover:text-dark'}`}
            >
              <Smile className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> Pediatric
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-base font-bold transition-all duration-300 ${activeTab === 'general' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-dark'}`}
            >
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> General
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group relative flex flex-col items-start p-2"
                >
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 transition-all duration-500 group-hover:scale-110 ${
                    activeTab === 'pediatric' 
                      ? 'bg-secondary/10 text-secondary' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  
                  <h4 className="font-display font-bold text-dark text-sm sm:text-xl mb-2 sm:mb-3 leading-tight">
                    {service.title}
                  </h4>
                  
                  <p className="text-muted leading-relaxed text-sm md:text-base mb-6">
                    {service.description}
                  </p>

                  {/* Elegant expanding line on hover */}
                  <div className={`h-0.5 w-12 transition-all duration-500 mt-auto group-hover:w-full ${
                    activeTab === 'pediatric' ? 'bg-secondary' : 'bg-primary'
                  }`} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
