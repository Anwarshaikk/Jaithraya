'use client';
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PricingToggle from './PricingToggle';
import { Plan } from '@/lib/types';

const PRICING_PLANS = [
  {
    name: 'Starter',
    description: 'For individuals and small teams getting started.',
    price: {
      monthly: 49,
      annual: 490,
      note: 'Billed monthly or annually.',
    },
    features: [
      'Automated Appointment Scheduling',
      'Basic Customer CRM',
      'Email & SMS Reminders',
      'Online Payment Processing',
      'Standard Reporting Dashboard',
    ],
    isPopular: false,
  },
  {
    name: 'Growth',
    description: 'For growing businesses looking to scale.',
    price: {
      monthly: 99,
      annual: 990,
      note: 'Includes 2 months free.',
    },
    features: [
      'Everything in Starter, plus:',
      'Advanced CRM with Tagging',
      'Customizable Automated Workflows',
      'Team Calendar Management',
      'Performance Analytics',
      'API Access for Integrations',
      'Priority Email Support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs.',
    price: {
      monthly: 'Custom',
      annual: 'Custom',
      note: 'Contact us for a tailored quote.',
    },
    features: [
      'Everything in Growth, plus:',
      'Dedicated Account Manager',
      'Custom AI Model Development',
      'Advanced Security & Compliance',
      'Onboarding & Training Services',
      'Service Level Agreement (SLA)',
      'Premium 24/7 Support',
    ],
    isPopular: false,
  },
] as const satisfies ReadonlyArray<Plan>;

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            No hidden fees. Choose the plan that's right for you.
          </p>
        </div>

        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
