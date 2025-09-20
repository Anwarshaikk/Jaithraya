'use client';
import React from 'react';
import { ABOUT_SECTION } from '@/constants';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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

const QuoteSection = () => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-saffron-200 to-accent-200 rounded-2xl p-12 text-center shadow-lg my-24"
    >
      <Quote className="w-16 h-16 text-white/80 mx-auto mb-6" />
      <blockquote className="text-3xl md:text-4xl text-white font-bold italic mb-6 leading-tight">
        "{ABOUT_SECTION.founder.quote}"
      </blockquote>
      <cite className="text-white/90 font-semibold text-lg">
        — {ABOUT_SECTION.founder.quoteAuthor}
      </cite>
    </motion.div>
  );
};

export default QuoteSection;
