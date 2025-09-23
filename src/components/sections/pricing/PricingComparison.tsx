import React from 'react';
import { Check, X } from 'lucide-react';

const PricingComparison = () => {
  const features = [
    { name: "Social Media Management", starter: true, professional: true, enterprise: true },
    { name: "Content Creation", starter: "8 posts/month", professional: "16 posts/month", enterprise: "Unlimited" },
    { name: "Analytics & Reporting", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { name: "Paid Advertising", starter: false, professional: true, enterprise: true },
    { name: "Email Support", starter: true, professional: true, enterprise: true },
    { name: "Phone Support", starter: false, professional: true, enterprise: true },
    { name: "Priority Support", starter: false, professional: false, enterprise: true },
    { name: "Strategy Calls", starter: "Monthly", professional: "Bi-weekly", enterprise: "Weekly" },
    { name: "Competitor Analysis", starter: false, professional: true, enterprise: true },
    { name: "Video Production", starter: false, professional: false, enterprise: true },
    { name: "Influencer Partnerships", starter: false, professional: false, enterprise: true },
    { name: "Custom Integrations", starter: false, professional: false, enterprise: true }
  ];

  const plans = [
    { name: "Starter", price: "$2,500", period: "per month" },
    { name: "Professional", price: "$5,000", period: "per month", popular: true },
    { name: "Enterprise", price: "$10,000", period: "per month" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Plans</h2>
          <p className="text-lg text-gray-600">See exactly what's included in each package</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                {plans.map((plan, index) => (
                  <th key={index} className="text-center py-4 px-6">
                    <div className={`${plan.popular ? 'bg-blue-600 text-white rounded-lg p-4' : ''}`}>
                      <div className="font-semibold text-lg">{plan.name}</div>
                      <div className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </div>
                      <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.period}
                      </div>
                      {plan.popular && (
                        <div className="text-xs mt-2 bg-blue-500 px-2 py-1 rounded">
                          Most Popular
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{feature.starter}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.professional === 'boolean' ? (
                      feature.professional ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{feature.professional}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your business. 
              Schedule a free consultation to discuss your specific needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
