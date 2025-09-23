import React from 'react';
import { Calendar, Users, Camera, Heart } from 'lucide-react';

const LifestyleEventsFeatures = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-saffron-500" />,
      title: 'Event Management',
      description: 'Comprehensive event planning and management solutions, from intimate gatherings to large-scale celebrations, with seamless coordination and execution.',
    },
    {
      icon: <Users className="w-12 h-12 text-saffron-500" />,
      title: 'Community Building',
      description: 'Create and nurture engaged communities around your brand through social media strategies, loyalty programs, and meaningful customer interactions.',
    },
    {
      icon: <Camera className="w-12 h-12 text-saffron-500" />,
      title: 'Content Creation',
      description: 'Professional photography, videography, and content creation services that showcase your events and lifestyle brand in the most compelling way.',
    },
    {
      icon: <Heart className="w-12 h-12 text-saffron-500" />,
      title: 'Brand Storytelling',
      description: 'Craft authentic brand stories that resonate with your audience, building emotional connections and long-term customer relationships.',
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Elevate Your Lifestyle Brand
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Specialized digital solutions for lifestyle brands, event planners, and businesses that create memorable experiences.
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

export default LifestyleEventsFeatures;
