import React from 'react';
import Link from 'next/link';
import { HERO_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('bg-gray-50', className)}>
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
          {HERO_SECTION.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {HERO_SECTION.subtitle}
        </p>
        <div className="mt-8">
          <Link
            href={HERO_SECTION.ctaHref}
            className="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold hover:bg-blue-700 transition duration-300 inline-block"
          >
            {HERO_SECTION.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
