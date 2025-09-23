import React from 'react';
import { BarChart, TrendingUp, Target, Database } from 'lucide-react';

const AnalyticsFeatures = () => {
  const features = [
    {
      icon: <BarChart className="w-12 h-12 text-saffron-500" />,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports that drive informed decision-making.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-saffron-500" />,
      title: 'Performance Tracking',
      description: 'Monitor key metrics and KPIs in real-time, identify trends, and track progress toward your business goals with precision.',
    },
    {
      icon: <Target className="w-12 h-12 text-saffron-500" />,
      title: 'Predictive Analytics',
      description: 'Leverage advanced analytics to forecast trends, predict customer behavior, and make proactive business decisions.',
    },
    {
      icon: <Database className="w-12 h-12 text-saffron-500" />,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources, creating a unified view of your business performance and opportunities.',
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Unlock the Power of Your Data
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Advanced analytics solutions that turn your data into actionable insights and competitive advantages.
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

export default AnalyticsFeatures;
