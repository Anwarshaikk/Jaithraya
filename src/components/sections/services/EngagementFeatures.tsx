import React from 'react';
import { Users, MessageCircle, Heart, Share2 } from 'lucide-react';

const EngagementFeatures = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-saffron-500" />,
      title: 'Community Building',
      description: 'Build and nurture engaged communities around your brand through strategic social media management and authentic content creation.',
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-saffron-500" />,
      title: 'Customer Communication',
      description: 'Enhance customer relationships with personalized communication strategies, chatbots, and multi-channel engagement platforms.',
    },
    {
      icon: <Heart className="w-12 h-12 text-saffron-500" />,
      title: 'Brand Loyalty',
      description: 'Create emotional connections with your audience through loyalty programs, exclusive content, and memorable brand experiences.',
    },
    {
      icon: <Share2 className="w-12 h-12 text-saffron-500" />,
      title: 'Viral Marketing',
      description: 'Develop shareable content and campaigns that encourage organic growth and word-of-mouth marketing for maximum reach.',
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Build Meaningful Customer Relationships
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Strategic engagement solutions that create lasting connections and turn customers into brand advocates.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 text-center sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {features.map((feature, index) => (
            <div key={index} className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg">
              <div className="flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-pj">{feature.title}</h3>
              <p className="mt-4 text-base text-gray-600 font-pj">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementFeatures;
