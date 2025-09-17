'use client';
import React from 'react';
import Link from 'next/link';
import { ABOUT_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const { ref, isInView } = useScrollAnimation();

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
    <section id="about" className={cn('relative py-20 bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent to-70%"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          className="text-center mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6"
          >
            {ABOUT_SECTION.hero.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed"
          >
            {ABOUT_SECTION.hero.subtitle}
          </motion.p>
        </motion.div>

        {/* Combined Brand Story & Founder Section */}
        <motion.div
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              {ABOUT_SECTION.founder.title}
            </h2>
            <p className="text-xl text-saffron-600 font-semibold mb-6">
              {ABOUT_SECTION.founder.subtitle}
            </p>
            <p className="text-lg text-saffron-700 font-medium">
              {ABOUT_SECTION.brandStory.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-saffron-100 mb-8 hover:shadow-xl transition-all duration-300">
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-6">
                <p>{ABOUT_SECTION.brandStory.content}</p>
                <p>{ABOUT_SECTION.founder.story}</p>
                <p className="font-medium text-charcoal-800">{ABOUT_SECTION.founder.location}</p>
                <p>{ABOUT_SECTION.brandStory.description}</p>
                <p className="font-medium text-charcoal-800">{ABOUT_SECTION.brandStory.philosophy}</p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-8">
              {ABOUT_SECTION.founder.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center border border-saffron-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-charcoal-800 mb-3">{value.title}</h3>
                  <p className="text-charcoal-600">{value.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-saffron-100 hover:shadow-xl transition-all duration-300">
              <Quote className="w-12 h-12 text-saffron-500 mx-auto mb-4" />
              <blockquote className="text-xl text-charcoal-800 italic mb-4 leading-relaxed">
                "{ABOUT_SECTION.founder.quote}"
              </blockquote>
              <cite className="text-saffron-600 font-semibold">
                — {ABOUT_SECTION.founder.quoteAuthor}
              </cite>
            </motion.div>
          </div>
        </motion.div>

        {/* Threefold Victory Approach */}
        <motion.div
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              {ABOUT_SECTION.approach.title}
            </h2>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
              {ABOUT_SECTION.approach.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {ABOUT_SECTION.approach.tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-saffron-100 text-center group hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:scale-105"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 mb-4 flex-shrink-0">{tier.title}</h3>
                <p className="text-charcoal-600 leading-relaxed flex-grow">{tier.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              {ABOUT_SECTION.contact.title}
            </h2>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
              {ABOUT_SECTION.contact.subtitle}
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100">
              <Phone className="w-6 h-6 text-saffron-600" />
              <span className="text-charcoal-800 font-medium">{ABOUT_SECTION.contact.details.phone}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100">
              <Mail className="w-6 h-6 text-saffron-600" />
              <span className="text-charcoal-800 font-medium">{ABOUT_SECTION.contact.details.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-saffron-100">
              <MapPin className="w-6 h-6 text-saffron-600" />
              <span className="text-charcoal-800 font-medium">{ABOUT_SECTION.contact.details.location}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <Button
              href={ABOUT_SECTION.contact.cta.href}
              size="lg"
              className="group shadow-lg hover:shadow-xl px-8 py-4 text-lg"
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

export default AboutSection;
