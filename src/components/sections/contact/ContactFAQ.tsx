'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you start working on my project?",
      answer: "We can typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding for an additional fee."
    },
    {
      question: "What's included in your marketing strategy consultation?",
      answer: "Our consultation includes a comprehensive audit of your current marketing efforts, competitor analysis, goal setting, and a detailed roadmap with actionable recommendations tailored to your business."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups, small businesses, and enterprise clients. Our services are scalable and we customize our approach based on your company size and specific needs."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope, but most marketing campaigns show initial results within 30-60 days, with significant growth typically visible within 3-6 months."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer ongoing maintenance, optimization, and support packages to ensure your marketing continues to perform and grow over time."
    },
    {
      question: "What makes your approach different from other agencies?",
      answer: "We focus on data-driven strategies, transparent reporting, and building long-term partnerships. Our team combines creative excellence with technical expertise to deliver measurable results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Get answers to common questions about our services</p>
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
        
        <div className="mt-12 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Schedule a free consultation to discuss your specific needs.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
