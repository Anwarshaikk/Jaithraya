import React from 'react';

const AutomationTestimonials = () => {
  const testimonials = [
    {
      quote: 'Jaithraya\'s automation solutions saved us 20 hours per week. Our team can now focus on strategic work instead of repetitive tasks. The ROI was immediate and significant.',
      name: 'David Kim',
      title: 'Operations Manager, TechFlow Solutions',
    },
    {
      quote: 'The automation implementation was seamless and the results exceeded our expectations. Our customer response time improved by 60% and error rates dropped to nearly zero.',
      name: 'Maria Rodriguez',
      title: 'CEO, CustomerFirst Inc.',
    },
    {
      quote: 'Working with Jaithraya transformed our entire operation. Their automation solutions integrated perfectly with our existing systems and the training was comprehensive.',
      name: 'James Wilson',
      title: 'Founder, GrowthTech',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Success Stories from Our Automation Clients
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Real results from businesses we've helped automate their operations and boost efficiency.
          </p>
        </div>
        <div className="grid max-w-lg grid-cols-1 mx-auto mt-12 lg:max-w-none lg:grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-sm">
              <blockquote className="flex-1">
                <p className="text-lg leading-relaxed text-gray-900">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                <p className="mt-1 text-base text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationTestimonials;
