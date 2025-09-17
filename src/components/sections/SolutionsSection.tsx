'use client';
import React from 'react';
import Link from 'next/link';
import { SOLUTIONS_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';

const SolutionsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="solutions" className="py-20 bg-neutral-50 border-t border-saffron-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-neutral-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'circOut' }}
        >
          {SOLUTIONS_SECTION.title}
        </motion.h2>
        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {SOLUTIONS_SECTION.solutionCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="w-full md:w-1/3"
            >
              <Link
                href={card.href}
                className="block p-4 group"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative bg-gradient-to-br from-saffron-50 to-complementary-50 rounded-lg shadow-lg p-8 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:-translate-y-2 border border-transparent group-hover:border-accent-200"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-saffron-400 to-accent-400 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-charcoal-800 mb-4 group-hover:text-accent-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-charcoal-600 group-hover:text-charcoal-700 transition-colors duration-300">
                      {card.description}
                    </p>
                    <div className="absolute top-4 right-4 text-neutral-400 group-hover:text-accent-500 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
