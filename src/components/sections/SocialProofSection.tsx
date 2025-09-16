import React from 'react';
import { SOCIAL_PROOF_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface SocialProofSectionProps {
  className?: string;
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 bg-gradient-to-br from-complementary-50 to-saffron-50', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            {SOCIAL_PROOF_SECTION.title}
          </h2>
          <p className="text-xl text-neutral-600">
            {SOCIAL_PROOF_SECTION.subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SOCIAL_PROOF_SECTION.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-saffron-100 group"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-saffron-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <blockquote className="text-charcoal-700 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="border-t border-saffron-100 pt-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
            </div>
          ))}
        </div>

        {/* Client Logos - Commented out until we have actual clients */}
        {/* 
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Our Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {SOCIAL_PROOF_SECTION.clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-600 font-semibold text-sm">
                  {client.placeholder}
                </span>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default SocialProofSection;
