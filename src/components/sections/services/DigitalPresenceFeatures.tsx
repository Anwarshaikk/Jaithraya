
import React from 'react';
import { Globe, Search, Users, BarChart } from 'lucide-react';

const DigitalPresenceFeatures = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-saffron-500" />,
      title: 'Website Development',
      description: 'Custom-built, responsive websites that are optimized for performance and user experience, creating a strong online foundation for your brand.',
    },
    {
      icon: <Search className="w-12 h-12 text-saffron-500" />,
      title: 'SEO Optimization',
      description: 'Improving your search engine ranking to drive organic traffic, increase visibility, and connect you with customers actively searching for your services.',
    },
    {
      icon: <Users className="w-12 h-12 text-saffron-500" />,
      title: 'Social Media Management',
      description: 'Engaging your audience and building a strong social media presence across relevant platforms, fostering a community around your brand.',
    },
    {
      icon: <BarChart className="w-12 h-12 text-saffron-500" />,
      title: 'Analytics & Reporting',
      description: 'Tracking key metrics to measure success, providing insights into your digital performance, and informing future strategy for continuous improvement.',
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Establish a Powerful Digital Presence
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            We provide a comprehensive suite of features to build, manage, and grow your online brand.
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

export default DigitalPresenceFeatures;
