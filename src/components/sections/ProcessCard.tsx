'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessCardProps {
  step: Step;
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProcessCard: React.FC<ProcessCardProps> = ({ step }) => {
  return (
    <motion.div 
      className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-saffron-100/80 overflow-hidden"
      variants={childVariants}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-50/70 rounded-full -translate-y-16 translate-x-16 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-5xl font-bold text-saffron-200/80 group-hover:text-saffron-300 transition-colors duration-300">{step.number}</span>
          <div className="w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-full text-3xl shadow-md group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
            {step.icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-charcoal-800 mb-4">{step.title}</h3>
        <p className="text-charcoal-600 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
