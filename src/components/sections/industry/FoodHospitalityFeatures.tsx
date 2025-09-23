import React from 'react';
import { Utensils, Users, Star, Clock } from 'lucide-react';

const FoodHospitalityFeatures = () => {
  const features = [
    {
      icon: <Utensils className="w-12 h-12 text-saffron-500" />,
      title: 'Menu Management',
      description: 'Digital menu systems with real-time updates, seasonal changes, and allergen information to enhance customer experience and operational efficiency.',
    },
    {
      icon: <Users className="w-12 h-12 text-saffron-500" />,
      title: 'Customer Engagement',
      description: 'Build lasting relationships through loyalty programs, personalized experiences, and social media strategies that turn diners into brand advocates.',
    },
    {
      icon: <Star className="w-12 h-12 text-saffron-500" />,
      title: 'Review Management',
      description: 'Monitor and respond to online reviews across platforms, maintain your reputation, and showcase customer satisfaction to attract new diners.',
    },
    {
      icon: <Clock className="w-12 h-12 text-saffron-500" />,
      title: 'Reservation Systems',
      description: 'Streamlined booking platforms that reduce no-shows, optimize table turnover, and provide valuable customer data for better service delivery.',
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Transform Your Restaurant's Digital Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Specialized solutions designed for the unique challenges and opportunities in food & hospitality.
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

export default FoodHospitalityFeatures;
