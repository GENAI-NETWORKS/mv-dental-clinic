import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex justify-between items-center w-full mb-8"
    >
      {/* Connector line (hidden on mobile) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block"></div>

      {/* Left Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right pr-8' : 'hidden md:block'}`}>
        {isEven && (
          <div>
            <h4 className="text-xl font-display font-bold text-dark">{title}</h4>
            <p className="text-muted mt-2">{description}</p>
          </div>
        )}
      </div>

      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-primary flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-secondary"></div>
      </div>

      {/* Mobile Content Area (visible only on mobile) */}
      <div className="w-full pl-12 md:hidden">
        <div className="text-sm font-bold text-primary mb-1">{year}</div>
        <h4 className="text-xl font-display font-bold text-dark">{title}</h4>
        <p className="text-muted mt-2">{description}</p>
      </div>

      {/* Right Content */}
      <div className={`w-full md:w-5/12 ${!isEven ? 'md:text-left pl-8' : 'hidden md:block'}`}>
        {!isEven ? (
          <div>
            <h4 className="text-xl font-display font-bold text-dark">{title}</h4>
            <p className="text-muted mt-2">{description}</p>
          </div>
        ) : (
          <div className="text-3xl font-display font-black text-primary/10 tracking-widest">{year}</div>
        )}
        {isEven && <div className="hidden"></div>}
        {!isEven && <div className="text-3xl font-display font-black text-primary/10 tracking-widest text-right mt-2">{year}</div>}
      </div>
    </motion.div>
  );
};
