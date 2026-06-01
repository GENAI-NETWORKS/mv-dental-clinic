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
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 flex items-center">
        {prefix}
        {isInfinity ? (
          <span>∞</span>
        ) : (
          <span>{count}</span>
        )}
        {suffix}
      </div>
      <div className="text-muted font-medium uppercase tracking-wider text-sm whitespace-pre-line">
        {label}
      </div>
    </motion.div>
  );
};
