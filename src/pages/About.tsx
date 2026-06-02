import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import doctorImg from '../assets/doctor.jpg';
import awardsImg from '../assets/IMG_20260530_200224 (1).jpg';
import { doctorProfile } from '../data/doctorProfile';
import { Award, BookOpen, HeartPulse, GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <div className="pb-20 bg-surface min-h-screen">
      <SEO 
        title="About Us | MV Dental Clinic & Vaisha Children's Dental Center"
        description="Learn about our expert dental team led by Dr. M. Gawthaman and Dr. Vaisha. Delivering unmatched clinical excellence in Salem since 2007."
      />
      
      {/* Premium Dark Hero Header */}
      <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Dental Clinic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/85 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-gold drop-shadow-md" />
              <span className="text-sm font-bold text-white tracking-widest uppercase drop-shadow-md">Chief Consultant & Founder</span>
            </div>
            <h1 className="text-[7.5vw] sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-[1.1] drop-shadow-lg">
              <span className="block">Prof.</span>
              <span className="block whitespace-nowrap">Dr. M. Gawthaman, M.D.S.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/90 drop-shadow-md">
              {doctorProfile.titles}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT STICKY COLUMN (Doctor Portrait) */}
          <div className="w-full lg:w-4/12 lg:sticky lg:top-32 relative z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Image Frame */}
              <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10">
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                  <img src={doctorImg} alt={doctorProfile.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
                  
                  {/* Internal Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white">
                      <div className="font-bold text-lg mb-1">Over 20 Years</div>
                      <div className="text-sm opacity-90">of Clinical Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 right-0 lg:-right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>

          {/* RIGHT SCROLLING COLUMN (Content) */}
          <div className="w-full lg:w-8/12">
            
            {/* Biography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg prose-headings:font-display prose-headings:font-black max-w-none mb-16"
            >
              <h2 className="text-3xl md:text-4xl text-dark font-display font-black mb-6">
                Biography
              </h2>
              <blockquote className="border-l-8 border-primary bg-white shadow-sm p-6 md:p-8 rounded-2xl italic text-xl text-dark mb-8 font-medium">
                "Academician and clinician par excellence with expertise in Pediatric Dentistry for over two decades."
              </blockquote>
              <p className="text-muted leading-relaxed text-justify">
                As the founder of MV Dental Clinic and Vaisha Children's Dental Center, Dr. Gawthaman brings a wealth of experience from both academia and clinical practice. His dedication to pediatric dentistry ensures that every child receives the highest standard of care in a comfortable, anxiety-free environment.
              </p>
              <p className="text-muted leading-relaxed mt-4 text-justify">
                He is highly sought after for his specialized skills in conscious sedation and interceptive orthodontics, bridging the gap between advanced dental science and compassionate patient care.
              </p>
            </motion.div>

            {/* Premium Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl text-dark font-display font-black mb-12">
                Professional Journey
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-primary font-bold tracking-wide mb-1">2007 - Present</div>
                    <h4 className="text-xl font-bold text-dark mb-2">Founded Clinics</h4>
                    <p className="text-muted">Established MV Dental Clinic & Vaisha Children's Dental Center in Salem.</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-secondary font-bold tracking-wide mb-1">Past</div>
                    <h4 className="text-xl font-bold text-dark mb-2">Professor & Head</h4>
                    <p className="text-muted">Dept. of Pedodontics, VDCW Tiruchengode.</p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-dark text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-dark font-bold tracking-wide mb-1">6 Years</div>
                    <h4 className="text-xl font-bold text-dark mb-2">Clinical Experience</h4>
                    <p className="text-muted">Extensive surgical and pediatric practice at SKS Clinics & Hospitals.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Achievements Bento Box */}
            <div>
              <h2 className="text-3xl md:text-4xl text-dark font-display font-black mb-8">
                Achievements
              </h2>
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                  
                {/* Left: Uncropped Featured Image (Sticky on Desktop) */}
                <div className="w-full lg:w-5/12 lg:sticky lg:top-32 relative z-10 bg-surface">
                  <div className="relative w-full rounded-[2.5rem] bg-white border border-gray-100 p-3 shadow-2xl">
                    <div className="rounded-[2rem] overflow-hidden bg-surface">
                      <img 
                        src={awardsImg} 
                        alt="Awards and Recognitions" 
                        className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                  <div className="mt-8 text-center px-4">
                    <div className="inline-flex items-center justify-center gap-2 mb-4 bg-primary/5 px-4 py-2 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                      <Award className="w-4 h-4" />
                      Recognitions
                    </div>
                    <h4 className="text-3xl font-display font-black text-dark mb-3">A Legacy of Excellence</h4>
                    <p className="text-muted leading-relaxed">
                      Recognized nationally for outstanding contributions to pediatric dentistry and lifelong clinical excellence.
                    </p>
                  </div>
                </div>

                {/* Right: Editorial Typography (NO CARDS) */}
                <div className="w-full lg:w-7/12 flex flex-col">
                  
                  {/* Item 1 */}
                  <div className="border-b border-gray-200 py-10 first:pt-0 group">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">IDA & ISPPD Leadership</h4>
                        <p className="text-muted text-lg leading-relaxed text-justify">
                          Life Member and active contributor to the Indian Dental Association and Indian Society of Pedodontics and Preventive Dentistry.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="border-b border-gray-200 py-10 group">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-dark mb-3 group-hover:text-secondary transition-colors duration-300">Conference Organizer</h4>
                        <p className="text-muted text-lg leading-relaxed text-justify">
                          Spearheaded and led multiple National and State Level dental symposiums, fostering continuous education and academic growth among peers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="border-b border-gray-200 py-10 group">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-300">Academic Speaker</h4>
                        <p className="text-muted text-lg leading-relaxed text-justify">
                          Prolific paper presenter and highly esteemed guest lecturer at major academic forums and dental colleges across the country.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="py-10 group">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-dark/5 text-dark flex items-center justify-center shrink-0 group-hover:bg-dark group-hover:text-white transition-colors duration-500">
                        <HeartPulse className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-dark mb-3">Community Care Initiatives</h4>
                        <p className="text-muted text-lg leading-relaxed text-justify">
                          Dedicated to bridging healthcare access by conducting regular school dental camps and free community awareness programs.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
