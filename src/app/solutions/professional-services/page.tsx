import FeatureCluster from '@/components/FeatureCluster';
import ProcessTimeline from '@/components/ProcessTimeline';
import PricingSection from '@/components/PricingSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FinalCTASection from '@/components/sections/FinalCTASection';
import PageTOC from '@/components/PageTOC';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Services Solutions',
  description: 'Streamline operations, elevate your customer experience, and unlock growth with our tailored AI-powered automation solutions.',
};

export default function ProfessionalServices() {
  return (
    <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="lg:w-3/4">
            <FeatureCluster />
            <ProcessTimeline />
            <PricingSection />
            <TestimonialCarousel />
            <FinalCTASection />
          </div>
          <div className="lg:w-1/4">
            <PageTOC />
          </div>
        </div>
      </div>
  );
}
