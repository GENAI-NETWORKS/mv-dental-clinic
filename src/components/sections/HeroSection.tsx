import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ShieldCheck, Award, Smile, Check } from 'lucide-react';
import heroImg from '../../assets/IMG-20260531-WA0095 (1).jpg';

const ActionArea = () => (
  <div className="flex flex-col items-center lg:items-start w-full">
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
      <Link to="/contact">
        <Button variant="accent" size="md" className="shadow-lg shadow-accent/20">
          Book Appointment
        </Button>
      </Link>
      <Link to="/services/general">
        <Button variant="outline" size="md" className="bg-white">
          Our Services →
        </Button>
      </Link>
    </div>

    {/* Trust Bar */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm font-medium text-dark bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white inline-flex w-full sm:w-auto">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
          <Check className="w-3 h-3" strokeWidth={3} />
        </div>
        20+ Years Experience
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
          <Check className="w-3 h-3" strokeWidth={3} />
        </div>
        Pediatric Specialist
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
          <Check className="w-3 h-3" strokeWidth={3} />
        </div>
        Sedation Available
      </div>
    </div>
  </div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden bg-white flex flex-col justify-between">
      {/* Plain Pure White Background */}
      <div className="absolute inset-0 z-0 bg-white pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full">

          {/* LEFT COLUMN (60%) */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-bold text-muted uppercase tracking-widest mb-4">
                Pediatric & Family Dentistry · Salem
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-[64px] font-display font-black text-dark leading-tight mb-6">
                Expert Smiles, <br />
                <span className="text-primary">Gentle Care.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
                Comprehensive dental treatment for children and families delivered with clinical excellence since 2007.
              </p>

              <div className="hidden lg:block">
                <ActionArea />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (40%) - Floating Cards */}
          <div className="w-full lg:w-2/5 relative h-[400px] lg:h-[500px] lg:-translate-x-12 xl:-translate-x-16">
            <div className="relative w-full h-full flex items-center justify-center">

              {/* Wrapper to lock corner cards perfectly */}
              <div className="relative">
                {/* Card 1: Main Illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-80 lg:w-[23rem] xl:w-[25rem] h-[26rem] lg:h-[28rem] xl:h-[32rem] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(26,123,196,0.15)] p-6 flex flex-col items-center justify-center border border-primary/5 relative z-10"
                >
                  <div className="w-full flex flex-col items-center -mt-6 xl:-mt-10">
                    <div className="w-full h-48 lg:h-56 xl:h-64 rounded-[1.5rem] overflow-hidden mb-6 relative shadow-inner">
                      <img src={heroImg} alt="Clinic Environment" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-display font-bold text-dark text-xl lg:text-2xl">Perfect Smiles</h3>
                    <p className="text-muted text-sm lg:text-base text-center mt-2">Advanced dental care for your family.</p>
                  </div>
                </motion.div>

                {/* Card 2: Floating Badge (Top Right Corner) */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute z-20 -top-6 -right-4 lg:-top-8 lg:-right-12 xl:-top-10 xl:-right-16 bg-white px-6 py-4 rounded-2xl shadow-[0_15px_30px_rgba(26,123,196,0.12)] border border-primary/5 flex items-center gap-4 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-dark text-sm leading-snug">
                    Specialist in <br />Pediatric Dentistry
                  </div>
                </motion.div>

                {/* Card 3: Floating Stat (Bottom Left Corner) */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute z-20 bottom-0 -left-4 lg:bottom-2 lg:-left-12 xl:bottom-4 xl:-left-16 bg-white px-6 py-4 rounded-2xl shadow-[0_15px_30px_rgba(26,123,196,0.12)] border border-primary/5 flex items-center gap-4 animate-float"
                  style={{ animationDelay: '2s' }}
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-dark text-sm leading-snug">
                    Since 2007 <br />
                    <span className="text-muted font-normal">Salem</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Mobile Action Area (Below Image) */}
          <div className="w-full lg:hidden mt-4 flex flex-col items-center">
            <ActionArea />
          </div>

        </div>
      </div>

      {/* BOTTOM TICKER STRIP */}
      <div className="w-full overflow-hidden py-4 mt-12 border-t-4 relative z-30 shadow-2xl" style={{ backgroundColor: '#1A7BC4', borderColor: '#3FA0E0' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="whitespace-nowrap flex"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center text-white text-sm font-bold mx-4 tracking-wider uppercase">
              <span className="mx-4 text-white/50">•</span>
              MV Dental Clinic
              <span className="mx-4 text-white/50">•</span>
              Vaisha Children's Dental Center
              <span className="mx-4 text-white/50">•</span>
              Pediatric Specialist
              <span className="mx-4 text-white/50">•</span>
              Family Dentistry
              <span className="mx-4 text-white/50">•</span>
              Salem
              <span className="mx-4 text-white/50">•</span>
              Since 2007
              <span className="mx-4 text-white/50">→</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
