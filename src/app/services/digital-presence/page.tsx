import DigitalPresenceHero from '@/components/sections/services/DigitalPresenceHero';
import DigitalPresenceFeatures from '@/components/sections/services/DigitalPresenceFeatures';
import DigitalPresenceShowcase from '@/components/sections/services/DigitalPresenceShowcase';
import DigitalPresenceProcess from '@/components/sections/services/DigitalPresenceProcess';
import DigitalPresencePricing from '@/components/sections/services/DigitalPresencePricing';
import DigitalPresenceTestimonials from '@/components/sections/services/DigitalPresenceTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function DigitalPresence() {
  return (
    <main>
      <DigitalPresenceHero />
      <DigitalPresenceFeatures />
      <DigitalPresenceShowcase />
      <DigitalPresenceProcess />
      <DigitalPresencePricing />
      <DigitalPresenceTestimonials />
      <FinalCTASection />
    </main>
  );
}
