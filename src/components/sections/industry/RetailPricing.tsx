'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';
import { Button } from '@/components/ui/Button';

const RetailPricing: React.FC = () => {
  const { openModal } = useConsultation();

  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'one-time setup',
      description: 'Perfect for new retail businesses',
      popular: false,
      features: [
        'Professional website with online store',
        'Basic inventory management',
        'Mobile-optimized design',
        'Payment processing setup',
        'Basic analytics dashboard',
        '30-day support & training',
        'Google My Business optimization'
      ],
      cta: 'Get Started',
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Growth',
      price: '$7,500',
      period: 'one-time setup',
      description: 'Most popular for growing retail businesses',
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced inventory management',
        'Customer loyalty program',
        'POS system integration',
        'Advanced analytics & reporting',
        'Marketing automation tools',
        'Staff management system',
        '90-day support & training',
        'Monthly performance reports'
      ],
      cta: 'Choose Growth',
      color: 'from-saffron-500 to-saffron-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For established retail businesses',
      popular: false,
      features: [
        'Everything in Growth',
        'Multi-location management',
        'Custom AI integrations',
        'Advanced reporting & insights',
        'API integrations',
        'Dedicated account manager',
        'Priority support',
        'Quarterly strategy reviews',
        'Custom feature development'
      ],
      cta: 'Contact Us',
      color: 'from-charcoal-600 to-charcoal-700'
    }
  ];

  const addOns = [
    {
      name: 'Advanced Analytics',
      price: '$200/month',
      description: 'AI-powered insights and predictive analytics'
    },
    {
      name: 'Marketing Automation',
      price: '$150/month',
      description: 'Automated email and SMS marketing campaigns'
    },
    {
      name: 'Multi-Location',
      price: '$100/month',
      description: 'Manage multiple store locations from one dashboard'
    },
    {
      name: 'Custom Integrations',
      price: 'Custom',
      description: 'Connect with your existing retail systems'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Choose the package that fits your retail business needs. 
            All packages include setup, training, and ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-saffron-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-charcoal-800 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-charcoal-900 mb-1">{pkg.price}</div>
                  <div className="text-charcoal-500">{pkg.period}</div>
                  <p className="text-charcoal-600 mt-4">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={openModal}
                  variant="primary"
                  size="lg"
                  className={`w-full group bg-gradient-to-r ${pkg.color} hover:shadow-lg`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-teal-50 to-saffron-50 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-charcoal-900 text-center mb-8">
            Optional Add-ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-charcoal-800 mb-2">{addon.name}</h4>
                <div className="text-2xl font-bold text-teal-600 mb-2">{addon.price}</div>
                <p className="text-charcoal-600 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
            Not sure which package is right for you?
          </h3>
          <p className="text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the perfect solution 
            for your retail business needs.
          </p>
          <Button
            onClick={openModal}
            variant="default"
            size="lg"
            className="bg-teal-500 hover:bg-saffron-500 hover:shadow-lg"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailPricing;
