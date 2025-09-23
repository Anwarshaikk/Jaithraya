import EngagementHero from '@/components/sections/services/EngagementHero';
import EngagementFeatures from '@/components/sections/services/EngagementFeatures';
import EngagementProcess from '@/components/sections/services/EngagementProcess';
import EngagementPricing from '@/components/sections/services/EngagementPricing';
import EngagementTestimonials from '@/components/sections/services/EngagementTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Engagement() {
  return (
    <main>
      <EngagementHero />
      <EngagementFeatures />
      <EngagementProcess />
      <EngagementPricing />
      <EngagementTestimonials />
      <FinalCTASection />
    </main>
  );
}
