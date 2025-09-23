import React from 'react';

const LifestyleEventsTestimonials = () => {
  const testimonials = [
    {
      quote: 'Jaithraya transformed our wedding planning business into a luxury brand. Our Instagram following grew by 500% and we\'re now booking clients 6 months in advance. Their creative vision is unmatched.',
      name: 'Sarah Johnson',
      title: 'Founder, Elegant Affairs',
    },
    {
      quote: 'Working with Jaithraya was like having a creative partner who truly understood our brand. They helped us build a community of 50,000+ engaged followers who love our lifestyle content.',
      name: 'Michael Chen',
      title: 'Lifestyle Influencer, @UrbanMinimalist',
    },
    {
      quote: 'The team at Jaithraya made our corporate events unforgettable. Their digital marketing strategies helped us attract high-profile clients and establish ourselves as the premier event company in the city.',
      name: 'Lisa Rodriguez',
      title: 'CEO, Corporate Celebrations',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Success Stories from Our Lifestyle Partners
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Real results from lifestyle brands and event planners we've helped create memorable experiences.
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

export default LifestyleEventsTestimonials;
