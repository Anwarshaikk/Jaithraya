'use client';
import React from 'react';
import { FINAL_CTA_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Globe, Cpu, BarChart3 } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import { Button } from '@/components/ui/Button';

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
    <section className={cn('relative py-32 bg-gradient-to-br from-saffron-50 via-saffron-100 to-teal-100 overflow-hidden', className)}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-saffron-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-saffron-400/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-saffron-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-saffron-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Content with Glow Effect */}
          <motion.div 
            variants={itemVariants} 
            className="relative mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-charcoal-900 via-saffron-600 to-teal-600 bg-clip-text text-transparent mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              {FINAL_CTA_SECTION.title}
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-charcoal-700 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              {FINAL_CTA_SECTION.subtitle}
            </motion.p>
          </motion.div>

          {/* Enhanced Features Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {FINAL_CTA_SECTION.features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-saffron-200 shadow-2xl hover:shadow-saffron-500/20 transition-all duration-300">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-saffron-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-saffron-500 to-teal-500 rounded-full flex items-center justify-center">
                        {index === 0 && <Globe className="w-6 h-6 text-white drop-shadow-lg" />}
                        {index === 1 && <Cpu className="w-6 h-6 text-white drop-shadow-lg" />}
                        {index === 2 && <BarChart3 className="w-6 h-6 text-white drop-shadow-lg" />}
                      </div>
                      <span className="text-2xl font-bold text-charcoal-900">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                      {feature.split(':')[0] || feature}
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {feature.split(':')[1] || feature}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Contact Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Phone, text: "203-710-0790", color: "from-teal-500 to-teal-600" },
              { icon: Mail, text: "anwarrashidshaik@jaithraya.com", color: "from-saffron-500 to-saffron-600" },
              { icon: MapPin, text: "West Haven, CT (Serving Globally)", color: "from-teal-500 to-saffron-500" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-saffron-200 hover:border-saffron-300 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-charcoal-800 font-medium text-sm">{contact.text}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Super Cool CTA Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-saffron-500 to-teal-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Button
                onClick={openModal}
                variant="default"
                size="lg"
                className="relative group bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white font-bold text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-saffron-500/25 transition-all duration-300 border-0"
              >
                <motion.div
                  className="flex items-center space-x-3"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Globe className="w-6 h-6" />
                  <span>Schedule Your Free Consultation</span>
                  <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                </motion.div>
              </Button>
            </motion.div>
            
            {/* Enhanced Features List */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 text-charcoal-600"
              variants={itemVariants}
            >
              {[
                "Free 30-minute consultation",
                "Custom business assessment", 
                "No commitment required"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-saffron-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-saffron-500" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
