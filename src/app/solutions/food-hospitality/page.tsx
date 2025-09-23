import FoodHospitalityHero from '@/components/sections/industry/FoodHospitalityHero';
import FoodHospitalityFeatures from '@/components/sections/industry/FoodHospitalityFeatures';
import FoodHospitalityProcess from '@/components/sections/industry/FoodHospitalityProcess';
import FoodHospitalityPricing from '@/components/sections/industry/FoodHospitalityPricing';
import FoodHospitalityTestimonials from '@/components/sections/industry/FoodHospitalityTestimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function FoodHospitality() {
  return (
    <main>
      <FoodHospitalityHero />
      <FoodHospitalityFeatures />
      <FoodHospitalityProcess />
      <FoodHospitalityPricing />
      <FoodHospitalityTestimonials />
      <FinalCTASection />
    </main>
  );
}
