'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, Zap, BarChart3 } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';

const ProfessionalServicesHero = () => {
  const { openModal } = useConsultation();

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-your-abstract-bg.svg')] opacity-5"></div>
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white rounded-full p-3 mb-6 shadow-md">
            <Briefcase className="w-8 h-8 text-teal-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6">
            AI-Powered Solutions for Professional Services
          </h1>
          <p className="text-lg text-charcoal-700 max-w-3xl mx-auto mb-8">
            Streamline your operations, elevate your client experience, and unlock new growth opportunities with our tailored automation and AI solutions.
          </p>
          <Button
            onClick={openModal}
            size="lg"
            className="group bg-teal-500 hover:bg-saffron-500"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalServicesHero;
