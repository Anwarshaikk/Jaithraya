'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const RetailTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Our convenience store's inventory management improved dramatically. We reduced stockouts by 60% and increased profit margins by 25%.",
      author: "Maria Santos",
      company: "QuickMart Convenience",
      role: "Owner",
      avatar: "MS",
      rating: 5,
      results: "25% profit increase"
    },
    {
      id: 2,
      quote: "The customer loyalty program they built for our smoke shop has been incredible. Our repeat customers increased by 40% in just 3 months.",
      author: "David Kim",
      company: "Cloud Nine Smoke Shop",
      role: "Manager",
      avatar: "DK",
      rating: 5,
      results: "40% repeat customer increase"
    },
    {
      id: 3,
      quote: "As a boutique owner, the analytics dashboard showed me exactly which products were selling best. I optimized my inventory and increased sales by 35%.",
      author: "Lisa Johnson",
      company: "Chic Boutique",
      role: "Owner",
      avatar: "LJ",
      rating: 5,
      results: "35% sales increase"
    },
    {
      id: 4,
      quote: "Our coffee shop's online ordering system has been a game-changer. We're now processing 50% more orders with the same staff.",
      author: "Michael Chen",
      company: "Brew & Bean Coffee",
      role: "Owner",
      avatar: "MC",
      rating: 5,
      results: "50% more orders processed"
    },
    {
      id: 5,
      quote: "The automated reordering system for our pharmacy has saved us 15 hours per week. We never run out of popular medications anymore.",
      author: "Sarah Williams",
      company: "Community Pharmacy",
      role: "Pharmacist",
      avatar: "SW",
      rating: 5,
      results: "15 hours saved per week"
    },
    {
      id: 6,
      quote: "Our wine shop's customer insights helped us identify our best customers and create targeted promotions. Revenue increased by 30%.",
      author: "Robert Martinez",
      company: "Vintage Cellars",
      role: "Owner",
      avatar: "RM",
      rating: 5,
      results: "30% revenue increase"
    }
  ];

  const stats = [
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '25%', label: 'Average Profit Increase' },
    { number: '15+', label: 'Hours Saved Per Week' },
    { number: '60%', label: 'Reduction in Stockouts' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 to-saffron-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal-900 mb-4">
            Success Stories from Retail Businesses
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            See how we've helped retail and specialty stores transform their operations 
            and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
              <div className="text-charcoal-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-teal-200">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-teal-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-charcoal-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Results Badge */}
              <div className="bg-gradient-to-r from-teal-100 to-saffron-100 rounded-lg p-3 mb-6">
                <div className="text-sm font-medium text-teal-700">Key Result:</div>
                <div className="text-lg font-bold text-charcoal-800">{testimonial.results}</div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-charcoal-800">{testimonial.author}</div>
                  <div className="text-charcoal-600 text-sm">{testimonial.role}</div>
                  <div className="text-teal-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-500 to-saffron-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's transform your retail business with AI-powered solutions that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm opacity-90">30-minute consultation</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">Custom</div>
                <div className="text-sm opacity-90">Business assessment</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">No</div>
                <div className="text-sm opacity-90">Commitment required</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailTestimonials;
