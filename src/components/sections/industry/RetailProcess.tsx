'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

const RetailProcess: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Setup',
      description: 'We analyze your current retail operations and set up your digital foundation.',
      icon: ShoppingCart,
      details: [
        'Business needs assessment',
        'POS system integration',
        'Inventory management setup',
        'Staff training'
      ],
      timeline: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Automation Implementation',
      description: 'We implement smart automation tools to streamline your retail operations.',
      icon: BarChart3,
      details: [
        'Inventory tracking system',
        'Customer loyalty program',
        'Sales analytics dashboard',
        'Automated reordering'
      ],
      timeline: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Growth & Optimization',
      description: 'We use AI analytics to optimize your retail business and drive growth.',
      icon: TrendingUp,
      details: [
        'Performance analytics',
        'Customer insights',
        'Pricing optimization',
        'Marketing automation'
      ],
      timeline: 'Ongoing'
    }
  ];

  const results = [
    { metric: '25%', description: 'Increase in profit margins' },
    { metric: '60%', description: 'Reduction in stockouts' },
    { metric: '15+', description: 'Hours saved per week' },
    { metric: '95%', description: 'Customer satisfaction' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-teal-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal-900 mb-4">
            Our Proven 3-Step Process
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            We follow a systematic approach to transform your retail business, 
            ensuring measurable results at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-300 to-saffron-300 transform translate-x-4" />
              )}
              
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <step.icon className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                      <span className="text-charcoal-600">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-teal-50 rounded-lg p-4">
                  <span className="text-sm font-medium text-teal-700">Timeline: {step.timeline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-teal-500 to-saffron-500 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-8">Typical Results for Our Retail Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{result.metric}</div>
                <div className="text-teal-100">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailProcess;
