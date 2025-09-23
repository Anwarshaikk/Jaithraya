import React from 'react';
import { Bot, Zap, Workflow, Settings } from 'lucide-react';

const AutomationFeatures = () => {
  const features = [
    {
      icon: <Bot className="w-12 h-12 text-saffron-500" />,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks with intelligent automation that reduces manual work, eliminates errors, and frees up your team for strategic activities.',
    },
    {
      icon: <Zap className="w-12 h-12 text-saffron-500" />,
      title: 'Process Optimization',
      description: 'Identify bottlenecks and optimize business processes for maximum efficiency, faster delivery times, and improved customer satisfaction.',
    },
    {
      icon: <Workflow className="w-12 h-12 text-saffron-500" />,
      title: 'Integration Solutions',
      description: 'Connect your existing tools and systems seamlessly, creating a unified workflow that enhances productivity and data consistency.',
    },
    {
      icon: <Settings className="w-12 h-12 text-saffron-500" />,
      title: 'Custom Automation',
      description: 'Tailored automation solutions designed specifically for your business needs, ensuring maximum ROI and long-term scalability.',
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Automate Your Business Operations
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Powerful automation solutions that transform how your business operates, saving time and reducing costs.
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

export default AutomationFeatures;
