'use client';
import React from 'react';
import { HERO_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { openModal } = useConsultation();
  
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

  return (
    <section className={cn('relative bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden', className)}>
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent to-70%"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.7 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.9 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"
      ></motion.div>
      
      <div className="container mx-auto px-6 py-32 pb-40 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-charcoal-900 md:text-6xl mb-6"
          >
            {HERO_SECTION.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-charcoal-700 mb-4"
          >
            {HERO_SECTION.subtitle}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-charcoal-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {HERO_SECTION.valueProposition}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            <Button
              onClick={openModal}
              variant="primary"
              size="lg"
              className="group bg-saffron-500 hover:bg-teal-500"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
