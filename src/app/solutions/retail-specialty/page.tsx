import RetailHero from '@/components/sections/industry/RetailHero';
import RetailFeatures from '@/components/sections/industry/RetailFeatures';
import RetailProcess from '@/components/sections/industry/RetailProcess';
import RetailPricing from '@/components/sections/industry/RetailPricing';
import RetailTestimonials from '@/components/sections/industry/RetailTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function RetailSpecialty() {
  return (
    <main>
      <RetailHero />
      <RetailFeatures />
      <RetailProcess />
      <RetailPricing />
      <RetailTestimonials />
      <FinalCTASection />
    </main>
  );
}
