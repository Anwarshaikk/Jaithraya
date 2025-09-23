'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import { Button } from '@/components/ui/Button';

const CaseStudiesHero: React.FC = () => {
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

  const stats = [
    { icon: TrendingUp, number: '40%', label: 'Average Revenue Increase' },
    { icon: Users, number: '95%', label: 'Client Satisfaction Rate' },
    { icon: Award, number: '50+', label: 'Successful Projects' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent to-70%"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.7 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.9 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"
      />
      
      <div className="container mx-auto px-6 py-32 pb-40 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-saffron-100 text-saffron-700 text-sm font-medium mb-6"
          >
            Success Stories
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-charcoal-900 md:text-6xl mb-6"
          >
            Real Results, Real Businesses
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-charcoal-700 mb-4"
          >
            See how we've transformed businesses across different industries
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-charcoal-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From local service businesses to specialty retail stores, discover the 
            measurable impact our AI-powered solutions have delivered for our clients.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-all duration-300"
              >
                <div className="p-3 bg-saffron-100 rounded-lg w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-saffron-600" />
                </div>
                <div className="text-3xl font-bold text-charcoal-800 mb-2">{stat.number}</div>
                <div className="text-charcoal-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8">
            <Button
              onClick={openModal}
              variant="primary"
              size="lg"
              className="group bg-saffron-500 hover:bg-teal-500"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
