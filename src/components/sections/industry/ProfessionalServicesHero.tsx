'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Briefcase, RefreshCw } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import { Button } from '@/components/ui/Button';
import logEvent from '@/lib/analytics';

const ProfessionalServicesHero: React.FC = () => {
  const { openModal } = useConsultation();

  const handleCTAClick = () => {
    logEvent({ name: 'hero_cta_click' });
    openModal();
  };

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-saffron-50 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight text-charcoal-900 sm:text-6xl md:text-7xl"
          >
            Your Service Business, Perfected.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg md:text-xl text-charcoal-600 leading-relaxed"
          >
            Book faster. Get paid sooner. See performance clearly. Our AI tools handle the busywork, so you can focus on your craft.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button onClick={handleCTAClick} size="lg" className="w-full sm:w-auto">
              Start My Free Consultation
            </Button>
            <Button onClick={scrollToProcess} variant="ghost" size="lg" className="w-full sm:w-auto">
              See How It Works <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-charcoal-600"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-500" />
              <span className="font-medium">10+ Industries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-saffron-500" />
              <span className="font-medium">95% Customer Retention</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalServicesHero;
