'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PROCESS_SECTION } from '@/constants';
import ProcessCard from './ProcessCard';
import Button from '@/components/ui/Button';

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ className }) => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="process" className={cn('py-24 bg-white', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
              {PROCESS_SECTION.title}
            </h2>
            <p className="text-xl text-charcoal-700 mb-12">
              {PROCESS_SECTION.subtitle}
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {PROCESS_SECTION.steps.map((step, index) => (
            <ProcessCard key={index} step={step} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            href="/contact" 
            variant="primary"
            className="bg-saffron-500 hover:bg-teal-500"
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
