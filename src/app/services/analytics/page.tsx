import AnalyticsHero from '@/components/sections/services/AnalyticsHero';
import AnalyticsFeatures from '@/components/sections/services/AnalyticsFeatures';
import AnalyticsProcess from '@/components/sections/services/AnalyticsProcess';
import AnalyticsPricing from '@/components/sections/services/AnalyticsPricing';
import AnalyticsTestimonials from '@/components/sections/services/AnalyticsTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Analytics() {
  return (
    <main>
      <AnalyticsHero />
      <AnalyticsFeatures />
      <AnalyticsProcess />
      <AnalyticsPricing />
      <AnalyticsTestimonials />
      <FinalCTASection />
    </main>
  );
}
