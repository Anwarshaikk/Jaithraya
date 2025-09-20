'use client';
import React from 'react';
import { SOCIAL_PROOF_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface SocialProofSectionProps {
  className?: string;
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({ className }) => {
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className={cn('py-24 bg-gradient-to-br from-neutral-50 to-saffron-50 border-t border-saffron-100', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            {SOCIAL_PROOF_SECTION.title}
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {SOCIAL_PROOF_SECTION.subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SOCIAL_PROOF_SECTION.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-saffron-100 group flex flex-col"
            >
              <div className="mb-6 flex-grow">
                <Quote className="w-8 h-8 text-saffron-400 mb-4" />
                <blockquote className="text-charcoal-700 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="border-t border-saffron-100 pt-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-charcoal-800 group-hover:text-accent-600 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-charcoal-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Placeholder */}
      </div>
    </section>
  );
};

export default SocialProofSection;
