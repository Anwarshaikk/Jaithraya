import React from 'react';
import Link from 'next/link';
import { HERO_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('relative bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/5 to-accent-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-4xl font-bold text-charcoal-900 md:text-6xl mb-6">
          {HERO_SECTION.title}
        </h1>
        <p className="text-xl text-charcoal-700 mb-4">
          {HERO_SECTION.subtitle}
        </p>
        <p className="text-lg text-charcoal-600 mb-8 max-w-2xl mx-auto">
          {HERO_SECTION.valueProposition}
        </p>
        <div className="mt-8">
          <Link
            href={HERO_SECTION.ctaHref}
            className="bg-saffron-500 text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-saffron-600 hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            {HERO_SECTION.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
