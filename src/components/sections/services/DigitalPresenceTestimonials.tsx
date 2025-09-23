
import React from 'react';

const DigitalPresenceTestimonials = () => {
  const testimonials = [
    {
      quote: 'Jaithraya\'s team transformed our online presence. Our website traffic has increased by 200%, and our social media engagement is at an all-time high. Highly recommended!',
      name: 'Priya Sharma',
      title: 'Founder, Organica',
    },
    {
      quote: 'The best digital marketing agency we\'ve ever worked with. Their strategies are effective, and their team is always responsive, knowledgeable, and genuinely cares about our success.',
      name: 'Rajesh Kumar',
      title: 'Marketing Head, InnovateX',
    },
    {
      quote: 'Our new website is not only beautiful but also highly functional and user-friendly. The team at Jaithraya delivered beyond our expectations, on time and on budget.',
      name: 'Anjali Desai',
      title: 'Owner, The Craft House',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Real stories from businesses we've helped to succeed online.
          </p>
        </div>
        <div className="grid max-w-lg grid-cols-1 mx-auto mt-12 lg:max-w-none lg:grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-sm">
              <blockquote className="flex-1">
                <p className="text-lg leading-relaxed text-gray-900">
                  “{testimonial.quote}”
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

export default DigitalPresenceTestimonials;
