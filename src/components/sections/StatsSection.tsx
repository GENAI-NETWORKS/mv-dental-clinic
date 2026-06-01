import React from 'react';
import { StatCard } from '../ui/StatCard';

export const StatsSection = () => {
  return (
    <section className="py-16 bg-white relative z-20 -mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatCard end={20} suffix="+" label="Years\nExperience" delay={0.1} />
          <StatCard end={2} label="Specialty\nBrands" delay={0.2} />
          <StatCard end={0} isInfinity={true} label="Families\nTreated" delay={0.3} />
          <StatCard end={2007} label="Established\nSince" delay={0.4} />
        </div>
      </div>
    </section>
  );
};
