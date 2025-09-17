'use client';
import React from 'react';
import { TECHNOLOGY_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TechnologySectionProps {
  className?: string;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ className }) => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className={cn('py-20 bg-neutral-50 border-t border-saffron-100', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'circOut' }}
            className="text-4xl font-bold text-neutral-800 mb-4"
          >
            {TECHNOLOGY_SECTION.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'circOut', delay: 0.2 }}
            className="text-xl text-neutral-600"
          >
            {TECHNOLOGY_SECTION.subtitle}
          </motion.p>
        </div>

        {/* Technology Categories */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {TECHNOLOGY_SECTION.categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-saffron-50 to-accent-50/40 rounded-lg p-8 shadow-lg border border-saffron-100/60"
            >
              <h3 className="text-2xl font-semibold text-neutral-800 mb-8 text-center">
                {category.title}
              </h3>
              <motion.div
                className="space-y-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-lg group transition-all duration-300 border",
                      tech.isHighlighted 
                        ? 'bg-saffron-50 border-saffron-200' 
                        : 'bg-neutral-50 border-neutral-200/80 group-hover:border-saffron-200 group-hover:bg-saffron-50'
                    )}
                  >
                    <div>
                      <div className="font-semibold text-neutral-800">
                        {tech.name}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {tech.description}
                      </div>
                    </div>
                    <div className={cn(
                      "w-3 h-3 rounded-full transition-colors duration-300",
                      tech.isHighlighted ? 'bg-accent-500' : 'bg-saffron-400 group-hover:bg-accent-500'
                    )}></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
