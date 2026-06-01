import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatCardProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
  isInfinity?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ end, label, suffix = '', prefix = '', delay = 0, isInfinity }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInfinity) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInfinity]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center text-center p-6 relative group"
    >
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-colors duration-500"></div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-3 drop-shadow-md flex items-center relative z-10">
        {prefix}
        {isInfinity ? (
          <span>∞</span>
        ) : (
          <span>{count}</span>
        )}
        {suffix}
      </div>
      <div className="text-white/70 font-medium uppercase tracking-[0.2em] text-xs md:text-sm whitespace-pre-line relative z-10">
        {label}
      </div>
    </motion.div>
  );
};
