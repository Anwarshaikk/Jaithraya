import React from 'react';
import { FINAL_CTA_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface FinalCTASectionProps {
  className?: string;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 bg-blue-600 text-white', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {FINAL_CTA_SECTION.title}
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            {FINAL_CTA_SECTION.subtitle}
          </p>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {FINAL_CTA_SECTION.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 bg-blue-700 rounded-lg p-4"
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
                <span className="text-blue-100 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <a
              href={FINAL_CTA_SECTION.ctaHref}
              className="bg-white text-blue-600 rounded-full px-12 py-4 text-xl font-semibold hover:bg-gray-100 transition duration-300 inline-block shadow-lg hover:shadow-xl"
            >
              {FINAL_CTA_SECTION.ctaText}
            </a>
            <p className="text-blue-200 text-sm">
              No spam. No sales pitch. Just honest advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
