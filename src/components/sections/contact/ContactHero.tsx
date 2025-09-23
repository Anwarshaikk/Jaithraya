'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import { Button } from '@/components/ui/Button';

const ContactHero: React.FC = () => {
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '203-710-0790',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'anwarrashidshaik@jaithraya.com',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'West Haven, CT',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Mon-Fri 9AM-6PM EST',
      action: 'Schedule Call'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-teal-100 to-cyan-200 overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/30 to-transparent to-70%"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.7 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.9 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-saffron-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"
      />
      
      <div className="container mx-auto px-6 py-32 pb-40 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6"
          >
            Get In Touch
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-charcoal-900 md:text-6xl mb-6"
          >
            Let's Transform Your Business
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-charcoal-700 mb-4"
          >
            Ready to take your business to the next level?
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-charcoal-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Schedule a free consultation and discover how our AI-powered solutions 
            can help your business grow, automate operations, and increase revenue.
          </motion.p>

          {/* Contact Methods Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="p-3 bg-teal-100 rounded-lg w-fit mx-auto mb-4 group-hover:bg-saffron-100 transition-colors duration-300">
                  <method.icon className="h-6 w-6 text-teal-600 group-hover:text-saffron-600" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-800 mb-2">{method.title}</h3>
                <p className="text-charcoal-600 mb-4">{method.description}</p>
                <button className="text-teal-600 hover:text-saffron-600 font-medium text-sm transition-colors duration-300">
                  {method.action} →
                </button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8">
            <Button
              onClick={openModal}
              variant="primary"
              size="lg"
              className="group bg-teal-500 hover:bg-saffron-500"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
