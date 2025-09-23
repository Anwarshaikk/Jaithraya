'use client';
import React from 'react';
import { Switch } from '@/components/ui/Switch';
import { Label } from '@/components/ui/Label';

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (checked: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Label htmlFor="pricing-toggle" className="text-charcoal-600">
        Monthly
      </Label>
      <Switch
        id="pricing-toggle"
        checked={isAnnual}
        onCheckedChange={setIsAnnual}
        aria-label="Toggle between monthly and annual pricing"
      />
      <Label htmlFor="pricing-toggle" className="text-charcoal-600">
        Annually
      </Label>
      <div className="ml-2 rounded-full bg-saffron-100 px-3 py-1 text-sm font-medium text-saffron-700">
        2 months free
      </div>
    </div>
  );
};

export default PricingToggle;
