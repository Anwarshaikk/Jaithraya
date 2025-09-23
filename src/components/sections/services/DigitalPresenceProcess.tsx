
import React from 'react';

const DigitalPresenceProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and target audience to create a tailored digital strategy that aligns with your vision.',
    },
    {
      number: '02',
      title: 'Implementation & Build',
      description: 'Our team executes the strategy, building your website, creating content, and setting up social media profiles with precision and creativity.',
    },
    {
      number: '03',
      title: 'Optimization & Growth',
      description: 'We continuously monitor performance, optimize for better results, and identify new opportunities for growth, ensuring your digital presence evolves.',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our Streamlined Process
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            A clear and effective process to build and enhance your digital presence.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:block top-8 md:px-20 lg:px-28">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="855" height="118" viewBox="0 0 855 118" fill="none">
              <path d="M1 117C1 117 149.5 117 294.5 117C439.5 117 465 91 465 65.5C465 40 491 1 536 1C581 1 854 1 854 1" stroke="#D4D4D8" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
          </div>
          <div className="grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-3xl font-semibold text-gray-700">{step.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">{step.title}</h3>
                <p className="mt-4 text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPresenceProcess;
