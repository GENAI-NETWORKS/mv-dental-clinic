import React from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      
      <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-display font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
