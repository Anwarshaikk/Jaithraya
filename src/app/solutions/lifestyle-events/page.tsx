import LifestyleEventsHero from '@/components/sections/industry/LifestyleEventsHero';
import LifestyleEventsFeatures from '@/components/sections/industry/LifestyleEventsFeatures';
import LifestyleEventsProcess from '@/components/sections/industry/LifestyleEventsProcess';
import LifestyleEventsPricing from '@/components/sections/industry/LifestyleEventsPricing';
import LifestyleEventsTestimonials from '@/components/sections/industry/LifestyleEventsTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function LifestyleEvents() {
  return (
    <main>
      <LifestyleEventsHero />
      <LifestyleEventsFeatures />
      <LifestyleEventsProcess />
      <LifestyleEventsPricing />
      <LifestyleEventsTestimonials />
      <FinalCTASection />
    </main>
  );
}
