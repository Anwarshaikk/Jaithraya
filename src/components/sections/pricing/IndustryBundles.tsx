import React from 'react';
import { Check, Star } from 'lucide-react';

const IndustryBundles = () => {
  const bundles = [
    {
      industry: "Retail & E-commerce",
      description: "Complete digital marketing solution for online retailers",
      price: "$3,500",
      period: "per month",
      features: [
        "E-commerce social media management",
        "Product photography & content creation",
        "Google Shopping & Facebook ads",
        "Email marketing automation",
        "Inventory-based content planning",
        "Seasonal campaign management"
      ],
      benefits: [
        "Average 250% increase in online sales",
        "40% improvement in customer retention",
        "60% boost in social media engagement"
      ],
      popular: true
    },
    {
      industry: "Food & Hospitality",
      description: "Specialized marketing for restaurants and hospitality businesses",
      price: "$2,800",
      period: "per month",
      features: [
        "Restaurant social media management",
        "Food photography & video content",
        "Local SEO optimization",
        "Review management & reputation building",
        "Event promotion & special offers",
        "Delivery platform optimization"
      ],
      benefits: [
        "Average 180% increase in reservations",
        "35% boost in online orders",
        "50% improvement in review ratings"
      ],
      popular: false
    },
    {
      industry: "Professional Services",
      description: "B2B marketing solutions for service-based businesses",
      price: "$4,200",
      period: "per month",
      features: [
        "LinkedIn & professional networking",
        "Thought leadership content",
        "Lead generation campaigns",
        "Case study development",
        "Webinar & event promotion",
        "Client testimonial management"
      ],
      benefits: [
        "Average 300% increase in qualified leads",
        "45% improvement in conversion rates",
        "70% boost in brand authority"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Bundles</h2>
          <p className="text-lg text-gray-600">Tailored solutions designed for your industry</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                bundle.popular ? 'ring-2 ring-blue-600' : 'border border-gray-200'
              }`}
            >
              {bundle.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${bundle.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.industry}</h3>
                  <p className="text-gray-600 mb-4">{bundle.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-gray-900">{bundle.price}</span>
                    <span className="text-gray-600 ml-2">{bundle.period}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-2">
                    {bundle.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Typical results:</h4>
                  <ul className="space-y-2">
                    {bundle.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    bundle.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with businesses across all industries. Our team can create a custom 
              marketing strategy tailored specifically to your industry's unique challenges and opportunities.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Discuss Custom Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBundles;
