import FeatureCluster from '@/components/FeatureCluster';
import ProcessTimeline from '@/components/ProcessTimeline';
import PricingSection from '@/components/PricingSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FinalCTASection from '@/components/sections/FinalCTASection';
import ProfessionalServicesHero from '@/components/sections/industry/ProfessionalServicesHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Services Solutions',
  description: 'Streamline operations, elevate your customer experience, and unlock growth with our tailored AI-powered automation solutions.',
};

export default function ProfessionalServices() {
  return (
    <>
      <ProfessionalServicesHero />
      <div className="container mx-auto px-6">
        <FeatureCluster />
        <ProcessTimeline />
        <PricingSection />
        <TestimonialCarousel />
        <FinalCTASection />
      </div>
    </>
  );
}
