import React from 'react';

const AnalyticsTestimonials = () => {
  const testimonials = [
    {
      quote: 'Jaithraya\'s analytics solutions gave us insights we never knew we needed. Our decision-making process is now data-driven and our revenue has increased by 35% in just 6 months.',
      name: 'Sarah Chen',
      title: 'Marketing Director, DataDriven Corp',
    },
    {
      quote: 'The custom dashboards they created for us are incredible. We can now see exactly what\'s working and what isn\'t in real-time. It\'s transformed how we run our business.',
      name: 'Michael Thompson',
      title: 'CEO, GrowthMetrics',
    },
    {
      quote: 'Working with Jaithraya on our analytics implementation was seamless. Their team understood our complex data requirements and delivered exactly what we needed.',
      name: 'Lisa Park',
      title: 'Operations Manager, TechAnalytics',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Success Stories from Our Analytics Clients
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Real results from businesses we've helped unlock the power of their data.
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

export default AnalyticsTestimonials;
