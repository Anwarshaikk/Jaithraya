import React from 'react';
import { Check, X } from 'lucide-react';

const PricingPackages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Social media management (3 platforms)",
        "Content creation (8 posts/month)",
        "Basic analytics reporting",
        "Email support",
        "Monthly strategy call"
      ],
      notIncluded: [
        "Paid advertising",
        "Advanced analytics",
        "Priority support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Social media management (5 platforms)",
        "Content creation (16 posts/month)",
        "Advanced analytics & reporting",
        "Paid advertising management",
        "Email & phone support",
        "Bi-weekly strategy calls",
        "Competitor analysis"
      ],
      notIncluded: [
        "Video production",
        "Influencer partnerships"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$10,000",
      period: "per month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Unlimited social media platforms",
        "Unlimited content creation",
        "Advanced analytics & custom reporting",
        "Full paid advertising management",
        "Priority support (24/7)",
        "Weekly strategy calls",
        "Competitor analysis",
        "Video production",
        "Influencer partnerships",
        "Custom integrations"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
          <p className="text-lg text-gray-600">Flexible pricing options to fit your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                pkg.popular
                  ? 'ring-2 ring-saffron-500 transform scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-saffron-500 to-teal-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {pkg.notIncluded.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Not included:</h4>
                      <ul className="space-y-3">
                        {pkg.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-saffron-500 to-teal-500 text-white hover:from-saffron-600 hover:to-teal-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for unique business requirements.
          </p>
          <button className="bg-gradient-to-r from-saffron-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-saffron-600 hover:to-teal-600 transition-colors">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
