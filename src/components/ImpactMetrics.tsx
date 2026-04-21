import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface MetricItemProps {
  label: string;
  value: number;
  suffix: string;
  delay: number;
}

function MetricItem({ label, value, suffix, delay }: MetricItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="flex flex-col items-center text-center px-8 border-r last:border-r-0 border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2 font-mono tracking-tighter"
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-[10px] uppercase tracking-[0.4em] text-[#64748b] font-medium">
        {label}
      </div>
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          <MetricItem label="m² Designed" value={500000} suffix="+" delay={0.1} />
          <MetricItem label="Projects" value={50} suffix="+" delay={0.2} />
          <MetricItem label="Completed Homes" value={20} suffix="+" delay={0.3} />
          <MetricItem label="Years Experience" value={10} suffix="+" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
