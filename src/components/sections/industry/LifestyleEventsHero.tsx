'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Calendar, Users, Smartphone } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import { Button } from '@/components/ui/Button';

const LifestyleEventsHero: React.FC = () => {
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

  const businessTypes = [
    'Photography Services',
    'Event Planning',
    'Bike & Scooter Rentals',
    'Escape Rooms',
    'Art Studios',
    'Fitness Classes',
    'Personal Training'
  ];

  const keyFeatures = [
    { icon: Camera, text: 'Portfolio Showcase' },
    { icon: Calendar, text: 'Booking Management' },
    { icon: Users, text: 'Client Relations' },
    { icon: Smartphone, text: 'Mobile Experience' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-saffron-50 via-saffron-100 to-teal-200 overflow-hidden">
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
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"
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
            Lifestyle & Events Solutions
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-charcoal-900 md:text-6xl mb-6"
          >
            Create Memorable Experiences
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-charcoal-700 mb-4"
          >
            AI-powered solutions for creative and experiential businesses
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-charcoal-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            From photography to event planning, bike rentals to art studios - we help lifestyle and 
            events businesses showcase their work, manage bookings, and create unforgettable experiences.
          </motion.p>

          {/* Business Types Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {businessTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-sm font-medium text-charcoal-700 hover:bg-white/80 transition-all duration-300"
              >
                {type}
              </motion.div>
            ))}
          </motion.div>

          {/* Key Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + 0.1 * index }}
                className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <feature.icon className="h-5 w-5 text-saffron-600" />
                <span className="text-charcoal-700 font-medium">{feature.text}</span>
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
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifestyleEventsHero;
