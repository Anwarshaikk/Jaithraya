'use client';
import React from 'react';
import { FINAL_CTA_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import Button from '@/components/ui/Button';

interface FinalCTASectionProps {
  className?: string;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ className }) => {
  const { openModal } = useConsultation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className={cn('relative py-24 bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden border-t border-saffron-100', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent to-70%"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Main Content */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            {FINAL_CTA_SECTION.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-charcoal-700 mb-12 leading-relaxed">
            {FINAL_CTA_SECTION.subtitle}
          </motion.p>

          {/* Features List */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
            {FINAL_CTA_SECTION.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100"
              >
                <CheckCircle2 className="w-6 h-6 text-accent-500" />
                <span className="text-charcoal-700 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100">
              <Phone className="w-6 h-6 text-saffron-600" />
              <span className="text-charcoal-800 font-medium">203-710-0790</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100">
              <Mail className="w-6 h-6 text-saffron-600" />
              <span className="text-charcoal-800 font-medium">anwarrashidshaik@jaithraya.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100">
              <MapPin className="w-6 h-6 text-saffron-600" />
              <span className="text-charcoal-800 font-medium">West Haven, CT (Serving Globally)</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Button
              onClick={openModal}
              variant="primary"
              size="lg"
              className="group bg-saffron-500 hover:bg-teal-500"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            {/* Features List */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-charcoal-600 text-sm">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-accent-500 mr-1" />
                Free 30-minute consultation
              </span>
              <span className="text-charcoal-400">•</span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-accent-500 mr-1" />
                Custom business assessment
              </span>
              <span className="text-charcoal-400">•</span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-accent-500 mr-1" />
                No commitment required
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
