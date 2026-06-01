import React from 'react';
import { StatCard } from '../ui/StatCard';

export const StatsSection = () => {
  return (
    <section className="py-10 bg-transparent relative z-20 -mt-6 md:-mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/10">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50 mix-blend-overlay"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-white/10 relative z-10 p-2 md:p-6">
            <StatCard end={20} suffix="+" label={"Years\nExperience"} delay={0.1} />
            <StatCard end={2} label={"Specialty\nBrands"} delay={0.2} />
            <StatCard end={0} isInfinity={true} label={"Families\nTreated"} delay={0.3} />
            <StatCard end={2007} label={"Established\nSince"} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};
