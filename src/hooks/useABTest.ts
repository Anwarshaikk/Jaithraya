import { useState, useEffect } from 'react';

type Variant = 'A' | 'B';

const CTA_VARIANTS = {
  A: 'Get Free Consultation',
  B: 'Start My Free Consultation',
};

export const useABTest = (testName: string): Variant => {
  const [variant, setVariant] = useState<Variant>('A');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let assignedVariant = localStorage.getItem(testName) as Variant;
      if (!assignedVariant) {
        assignedVariant = Math.random() < 0.5 ? 'A' : 'B';
        localStorage.setItem(testName, assignedVariant);
      }
      setVariant(assignedVariant);
    }
  }, [testName]);

  return variant;
};

export const getCTAText = (variant: Variant) => {
  return CTA_VARIANTS[variant];
};
