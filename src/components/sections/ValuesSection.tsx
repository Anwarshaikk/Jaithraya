'use client';
import React from 'react';
import { ABOUT_SECTION } from '@/constants';
import { motion } from 'framer-motion';
import { Handshake, Bot, LineChart } from 'lucide-react';

const icons = {
  Integrity: <Handshake className="w-12 h-12 text-saffron-500" />,
  Innovation: <Bot className="w-12 h-12 text-saffron-500" />,
  'Client Growth': <LineChart className="w-12 h-12 text-saffron-500" />,
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const ValuesSection = () => {
  return (
    <motion.div className="grid md:grid-cols-3 gap-8 mb-24" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      {ABOUT_SECTION.founder.values.map((value) => (
        <motion.div
          key={value.title}
          variants={itemVariants}
          className="group relative bg-white/60 backdrop-blur-sm rounded-lg p-8 text-center border border-saffron-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="flex justify-center mb-6">{icons[value.title as keyof typeof icons]}</div>
          <h3 className="text-2xl font-bold text-charcoal-800 mb-4">{value.title}</h3>
          <p className="text-charcoal-600">{value.description}</p>
          <div className="absolute inset-0 bg-saffron-500/90 flex items-center justify-center p-6 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {value.quote}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ValuesSection;
