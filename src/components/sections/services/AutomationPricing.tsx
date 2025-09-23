import React from 'react';
import { Check } from 'lucide-react';

const AutomationPricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,000',
      frequency: 'One-time',
      description: 'Perfect for small businesses looking to automate basic workflows and processes.',
      features: [
        'Workflow Analysis',
        'Basic Automation Setup',
        'Email Automation',
        'Data Entry Automation',
        'Basic Integration',
      ],
      buttonText: 'Get Started',
      featured: false,
    },
    {
      name: 'Professional',
      price: '$4,500',
      frequency: 'One-time',
      description: 'For growing businesses ready to implement comprehensive automation solutions.',
      features: [
        'Everything in Starter',
        'Advanced Workflow Design',
        'Multi-system Integration',
        'Custom Automation Scripts',
        'Performance Monitoring',
        'Team Training',
      ],
      buttonText: 'Choose Professional',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: 'Let\'s Talk',
      description: 'Comprehensive automation solutions for large organizations with complex needs.',
      features: [
        'Everything in Professional',
        'Custom Development',
        'API Integration',
        'Advanced Analytics',
        'Dedicated Support',
      ],
      buttonText: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Automation Solutions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Choose the automation package that best fits your business needs and budget.
          </p>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-center md:max-w-full md:mt-16 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`overflow-hidden bg-white border-2 rounded-lg ${plan.featured ? 'border-saffron-500' : 'border-gray-200'}`}>
              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-5xl font-bold text-gray-900">{plan.price}</p>
                <p className="mt-4 text-sm text-gray-500">{plan.frequency}</p>
                <p className="mt-6 text-base text-gray-600">{plan.description}</p>
                <a href="#" title="" className={`inline-flex items-center justify-center px-6 py-3 mt-8 text-sm font-semibold text-white rounded-md ${plan.featured ? 'bg-saffron-500 hover:bg-saffron-600' : 'bg-gray-900 hover:bg-gray-800'}`} role="button">
                  {plan.buttonText}
                </a>
                <ul className="mt-8 space-y-4 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="inline-flex items-center space-x-2">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                      <span className="text-base font-medium text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationPricing;
