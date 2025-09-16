import React from 'react';
import { PROCESS_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 bg-gradient-to-br from-neutral-50 to-saffron-50', className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            {PROCESS_SECTION.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {PROCESS_SECTION.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {PROCESS_SECTION.steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center group"
            >
              {/* Connection Line with Arrow */}
              {index < PROCESS_SECTION.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 -translate-y-1/2 z-0">
                  <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-saffron-300 to-accent-300"></div>
                  <div className="absolute top-1/2 right-0 w-0 h-0 border-l-4 border-l-accent-400 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                </div>
              )}

              {/* Step Content */}
              <div className="relative z-10 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron-500 text-white text-xl font-bold rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="text-4xl mb-4">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
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
