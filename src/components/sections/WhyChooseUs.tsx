import { motion } from 'framer-motion';
import { GraduationCap, HeartPulse, Building2, SmilePlus, Award, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: '20+ years as professor & clinician; post-graduate specialist.'
  },
  {
    icon: HeartPulse,
    title: 'Sedation Expertise',
    description: 'Certified in NOIS, IV, oral & nasal sedation for anxious children.'
  },
  {
    icon: Building2,
    title: 'Dual Specialty Clinic',
    description: 'Pediatric + family dentistry under one roof since 2007.'
  },
  {
    icon: SmilePlus,
    title: 'Child-Friendly',
    description: 'Dedicated children\'s center: Vaisha Children\'s Dental Center.'
  },
  {
    icon: Award,
    title: 'Recognized Member',
    description: 'Life member of national dental associations (IDA & ISPPD).'
  },
  {
    icon: Stethoscope,
    title: 'Complete Treatment',
    description: 'From prevention to implants all under one address.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">The MV Dental Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-dark mb-6">
            Why Choose Our Clinic?
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-surface border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-dark mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
