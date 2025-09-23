'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/Collapsible'; 
import logEvent from '@/lib/analytics';

const PricingCard = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.price.annual : plan.price.monthly;
  const priceSuffix = isAnnual ? '/year' : '/month';

  const handleChoosePlan = () => {
    logEvent({
      name: 'pricing_select',
      properties: {
        plan: plan.name,
        isAnnual,
      },
    });
    // In a real app, this would likely trigger a checkout flow
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'relative flex flex-col rounded-xl border p-8 shadow-soft',
        plan.isPopular
          ? 'border-teal-300 bg-teal-50'
          : 'border-neutral-200 bg-white'
      )}
    >
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 rounded-full bg-teal-500 px-4 py-1 text-sm font-semibold text-white">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-charcoal-800">{plan.name}</h3>
      <p className="mt-2 text-charcoal-600 leading-relaxed">{plan.description}</p>

      <div className="mt-6">
        <span className="text-5xl font-bold tracking-tight text-charcoal-900">
          ${price}
        </span>
        <span className="ml-1 text-lg font-medium text-charcoal-500">
          {priceSuffix}
        </span>
      </div>

      <p className="mt-2 text-sm text-charcoal-500">{plan.price.note}</p>

      <Button
        onClick={handleChoosePlan}
        className={cn(
          'mt-8 w-full',
          plan.isPopular ? '' : 'bg-teal-500 hover:bg-teal-600'
        )}
        variant={plan.isPopular ? 'default' : 'outline'}
      >
        Choose {plan.name} &rarr;
      </Button>

      <div className="mt-8 h-px bg-neutral-200" />

      <div className="mt-8 flex-grow">
        <h4 className="text-base font-semibold text-charcoal-700">
          What’s included:
        </h4>
        <ul className="mt-4 space-y-3">
          {plan.features.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="text-charcoal-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {plan.features.length > 5 && (
        <Collapsible className="mt-4 text-sm">
          <CollapsibleTrigger className="group flex items-center font-semibold text-teal-600 text-base">
            Full details
            <Plus className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-45" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="mt-3 space-y-3">
              {plan.features.slice(5).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-charcoal-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      )}
    </motion.div>
  );
};

export default PricingCard;
