'use client';
import React from 'react';
import { PROCESS_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ProcessCard from './ProcessCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ className }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="process" className={cn('py-20 bg-gradient-to-br from-neutral-50 to-saffron-50 border-t border-saffron-100', className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            {PROCESS_SECTION.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {PROCESS_SECTION.subtitle}
          </p>
        </div>

        <div ref={ref} className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Animated Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-saffron-300 to-accent-300"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1 }}
              style={{ transformOrigin: 'left' }}
            />
                </div>

          {PROCESS_SECTION.steps.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 mb-6">
            Ready to start your transformation journey?
          </p>
          <a
            href="/contact"
            className="bg-saffron-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-saffron-600 transition duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
