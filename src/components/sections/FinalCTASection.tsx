import React from 'react';
import { FINAL_CTA_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface FinalCTASectionProps {
  className?: string;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ className }) => {
  return (
    <section className={cn('relative py-20 bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/5 to-accent-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            {FINAL_CTA_SECTION.title}
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 leading-relaxed">
            {FINAL_CTA_SECTION.subtitle}
          </p>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {FINAL_CTA_SECTION.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-saffron-100"
              >
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-charcoal-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <a
              href={FINAL_CTA_SECTION.ctaHref}
              className="bg-saffron-500 text-white rounded-full px-12 py-4 text-xl font-semibold hover:bg-saffron-600 hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
            >
              {FINAL_CTA_SECTION.ctaText}
            </a>
            <p className="text-charcoal-600 text-sm">
              No spam. No sales pitch. Just honest advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
