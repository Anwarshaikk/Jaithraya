'use client';
import React from 'react';
import { TECHNOLOGY_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TechnologySectionProps {
  className?: string;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className={cn('py-20 bg-neutral-50 border-t border-saffron-100', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-neutral-800 mb-4"
          >
            {TECHNOLOGY_SECTION.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-neutral-600"
          >
            {TECHNOLOGY_SECTION.subtitle}
          </motion.p>
        </div>

        {/* Technology Categories */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TECHNOLOGY_SECTION.categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-gradient-to-br from-saffron-50 to-accent-50/40 rounded-lg p-8 shadow-lg border border-saffron-100/60 hover:shadow-xl hover:shadow-saffron-100/20 transition-all duration-300 cursor-pointer"
            >
              <motion.h3 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="text-2xl font-semibold text-neutral-800 mb-8 text-center cursor-pointer"
              >
                {category.title}
              </motion.h3>
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
                    whileHover={{ 
                      scale: 1.02,
                      x: 4,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-lg group transition-all duration-300 border",
                      'isHighlighted' in tech && tech.isHighlighted 
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
                    <motion.div 
                      whileHover={{ 
                        scale: 1.3,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      className={cn(
                        "w-3 h-3 rounded-full transition-colors duration-300",
                        'isHighlighted' in tech && tech.isHighlighted ? 'bg-accent-500' : 'bg-saffron-400 group-hover:bg-accent-500'
                      )}
                    ></motion.div>
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
