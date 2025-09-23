'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle. We also offer prorated billing for upgrades."
    },
    {
      question: "What's included in the setup fee?",
      answer: "The setup fee covers initial strategy development, account setup, content planning, and the first month of campaign optimization. This ensures your campaigns start strong from day one."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Absolutely! We understand that every business is unique. We offer custom packages tailored to your specific needs, budget, and goals. Contact us to discuss your requirements."
    },
    {
      question: "What's your contract length?",
      answer: "We offer flexible contract options: month-to-month, 3-month, 6-month, and annual contracts. Longer contracts come with additional discounts and priority support."
    },
    {
      question: "How do you measure success?",
      answer: "We track key performance indicators (KPIs) specific to your goals, including ROI, lead generation, brand awareness, and engagement metrics. You'll receive detailed monthly reports."
    },
    {
      question: "What happens if I'm not satisfied?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not happy with our services within the first 30 days, we'll provide a full refund and help transition your accounts."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
          <p className="text-lg text-gray-600">Common questions about our pricing and services</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
