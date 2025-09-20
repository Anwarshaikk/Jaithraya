'use client';
import React from 'react';
import { ABOUT_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
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

const AboutHeroSection = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
        <Image
          src="/anwar-portrait-placeholder.png" // Placeholder image
          alt="Anwar Rashid Shaik"
          layout="fill"
          objectFit="cover"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-saffron-500/20 to-transparent"></div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6">
          {ABOUT_SECTION.hero.title}
        </h1>
        <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
          {ABOUT_SECTION.hero.subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutHeroSection;
