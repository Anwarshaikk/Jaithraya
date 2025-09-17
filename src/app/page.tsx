import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import TechnologySection from '@/components/sections/TechnologySection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <AboutSection />
      <ProcessSection />
      <SocialProofSection />
      <TechnologySection />
      <FinalCTASection />
    </main>
  );
}
