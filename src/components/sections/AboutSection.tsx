'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import AboutHeroSection from './AboutHeroSection';
import FounderStorySection from './FounderStorySection';
import ValuesSection from './ValuesSection';
import QuoteSection from './QuoteSection';
import FinalCTASection from './FinalCTASection';
import MobileCTA from '../layout/MobileCTA';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={cn('relative py-20 bg-gradient-to-br from-saffron-50 via-saffron-100 to-orange-200 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent to-70%"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <AboutHeroSection />
        <FounderStorySection />
        <ValuesSection />
        <QuoteSection />
        <FinalCTASection />
      </div>
      <MobileCTA />
    </section>
  );
};

export default AboutSection;
