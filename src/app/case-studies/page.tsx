import CaseStudiesHero from '@/components/sections/case-studies/CaseStudiesHero';
import CaseStudiesGrid from '@/components/sections/case-studies/CaseStudiesGrid';
import CaseStudiesFilter from '@/components/sections/case-studies/CaseStudiesFilter';
import CaseStudiesCTA from '@/components/sections/case-studies/CaseStudiesCTA';

export default function CaseStudies() {
  return (
    <main>
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudiesGrid />
      <CaseStudiesCTA />
    </main>
  );
}
