import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import TechnologySection from '@/components/sections/TechnologySection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FloatingCTA from '@/components/ui/FloatingCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <ProcessSection />
      <SocialProofSection />
      <TechnologySection />
      <FinalCTASection />
      <FloatingCTA />
    </main>
  );
}
