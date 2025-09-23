import React from 'react';

const EngagementTestimonials = () => {
  const testimonials = [
    {
      quote: 'Jaithraya transformed our customer engagement completely. Our social media following grew by 400% and customer satisfaction scores are at an all-time high. They truly understand how to build authentic relationships.',
      name: 'Jennifer Martinez',
      title: 'Marketing Manager, ConnectPlus',
    },
    {
      quote: 'The engagement strategies they implemented for our brand were game-changing. Our community is now highly active and our customers are our biggest advocates. The ROI has been incredible.',
      name: 'Robert Kim',
      title: 'Founder, BrandBuilders',
    },
    {
      quote: 'Working with Jaithraya on our customer engagement was the best decision we made. Their team created content that truly resonates with our audience and built a community that\'s passionate about our brand.',
      name: 'Amanda Foster',
      title: 'CEO, CommunityFirst',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Success Stories from Our Engagement Clients
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Real results from businesses we've helped build meaningful customer relationships.
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

export default EngagementTestimonials;
