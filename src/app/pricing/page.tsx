import PricingHero from '@/components/sections/pricing/PricingHero';
import PricingPackages from '@/components/sections/pricing/PricingPackages';
import IndustryBundles from '@/components/sections/pricing/IndustryBundles';
import PricingFAQ from '@/components/sections/pricing/PricingFAQ';
import PricingComparison from '@/components/sections/pricing/PricingComparison';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Pricing() {
  return (
    <main>
      <PricingHero />
      <PricingPackages />
      <IndustryBundles />
      <PricingComparison />
      <PricingFAQ />
      <FinalCTASection />
    </main>
  );
}
