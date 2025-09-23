'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, LucideProps } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useConsultation } from '@/contexts/ConsultationContext';

interface Step {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string[];
  whatYouGet: string[];
}

interface ProcessStepProps {
  step: Step;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index }) => {
  const { openModal } = useConsultation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-8 rounded-xl shadow-soft border border-neutral-200 flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="bg-teal-100 p-3 rounded-full mr-4">
          <step.icon className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal-800">{step.title}</h3>
      </div>
      <ul className="space-y-3 mb-6 text-charcoal-600 leading-relaxed">
        {step.description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-teal-500 mr-2 mt-1">&#8226;</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <h4 className="font-semibold text-charcoal-700 mb-3 text-base">What you get:</h4>
        <ul className="space-y-2 mb-6">
          {step.whatYouGet.map((item, i) => (
            <li key={i} className="flex items-center text-charcoal-700">
              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Button onClick={openModal} variant="outline" className="w-full">
          Book This Step
        </Button>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
