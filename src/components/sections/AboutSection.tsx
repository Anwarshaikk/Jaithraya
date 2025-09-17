'use client';
import React from 'react';
import Link from 'next/link';
import { ABOUT_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, CheckCircle2 } from 'lucide-react';

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
    <section id="about" className={cn('py-20 bg-gradient-to-br from-neutral-50 to-saffron-50', className)}>
      <div className="container mx-auto px-6">
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
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg border border-saffron-100 mb-8">
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
                  className="bg-gradient-to-br from-saffron-50 to-accent-50 rounded-lg p-6 text-center border border-saffron-100"
                >
                  <h3 className="text-xl font-bold text-charcoal-800 mb-3">{value.title}</h3>
                  <p className="text-charcoal-600">{value.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-saffron-100 to-accent-100 rounded-2xl p-8 text-center">
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-saffron-100 text-center group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
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

      </div>
    </section>
  );
};

export default AboutSection;
