import AutomationHero from '@/components/sections/services/AutomationHero';
import AutomationFeatures from '@/components/sections/services/AutomationFeatures';
import AutomationProcess from '@/components/sections/services/AutomationProcess';
import AutomationPricing from '@/components/sections/services/AutomationPricing';
import AutomationTestimonials from '@/components/sections/services/AutomationTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Automation() {
  return (
    <main>
      <AutomationHero />
      <AutomationFeatures />
      <AutomationProcess />
      <AutomationPricing />
      <AutomationTestimonials />
      <FinalCTASection />
    </main>
  );
}
