import React from 'react';

const FoodHospitalityTestimonials = () => {
  const testimonials = [
    {
      quote: 'Since working with Jaithraya, our online orders have increased by 300% and our restaurant is always fully booked. Their digital strategies transformed our business completely.',
      name: 'Chef Rajesh Kumar',
      title: 'Owner, Spice Garden Restaurant',
    },
    {
      quote: 'The team understood our vision perfectly. They created a beautiful website and set up online ordering that our customers love. Our revenue has doubled in just 6 months.',
      name: 'Priya Sharma',
      title: 'Manager, Café Delight',
    },
    {
      quote: 'Jaithraya helped us establish a strong online presence that attracts customers from all over the city. Our social media engagement and customer reviews have never been better.',
      name: 'Amit Patel',
      title: 'Founder, The Food Truck Co.',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Success Stories from Our Restaurant Partners
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Real results from restaurants we've helped grow their digital presence and customer base.
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

export default FoodHospitalityTestimonials;
