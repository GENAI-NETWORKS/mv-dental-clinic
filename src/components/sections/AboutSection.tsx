import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building } from 'lucide-react';
import clinicImg from '../../assets/IMG-20260531-WA0084 (1).jpg';
import { Button } from '../ui/Button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-surface scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float" />
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 lg:max-w-7xl mx-auto">
          
          {/* LEFT: Premium Image Container */}
          <motion.div 
            className="w-full lg:w-1/2 relative z-20 shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-xl mx-auto lg:mx-0">
              {/* Premium Image Frame */}
              <div className="rounded-[2.5rem] bg-white p-4 shadow-2xl relative z-10 border border-gray-100">
                <div className="w-full rounded-[2rem] overflow-hidden bg-surface relative">
                  <img 
                    src={clinicImg} 
                    alt="MV Dental Clinic" 
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badge (Safely on the Left) */}
              <motion.div
                className="absolute -bottom-8 left-4 lg:-left-12 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-black text-dark text-lg">Est. 2007</div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest">Salem's Trusted Clinic</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Clean Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative z-30 mt-12 lg:mt-0"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">About Our Clinic</h2>
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-dark mb-8 leading-[1.1]">
                Excellence in Dental Care
              </h3>
              
              <p className="text-muted text-lg leading-relaxed mb-8 text-justify">
                Founded by Prof. Dr. M. Gawthaman, MV Dental Clinic and Vaisha Children's Dental Center have been delivering precision-driven, compassionate dental care for over two decades. We specialize in both comprehensive family dentistry and dedicated pediatric care, ensuring every visit is stress-free and effective.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <h4 className="text-3xl font-black text-primary mb-1">20+</h4>
                  <p className="text-sm font-bold text-muted uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-secondary mb-1">10k+</h4>
                  <p className="text-sm font-bold text-muted uppercase tracking-wider">Happy Smiles</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link to="/about">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-primary/20 group">
                    Meet Dr. Gawthaman
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
