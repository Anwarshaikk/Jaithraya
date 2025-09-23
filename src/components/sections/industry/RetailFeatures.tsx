'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Smartphone, 
  Package, 
  CreditCard, 
  MessageSquare, 
  TrendingUp,
  Shield,
  Zap,
  AlertTriangle,
  Target
} from 'lucide-react';

const RetailFeatures: React.FC = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'POS Integration',
      description: 'Seamlessly connect with your existing POS system or use our built-in solution.',
      benefits: ['Real-time sales tracking', 'Inventory synchronization', 'Payment processing']
    },
    {
      icon: Package,
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory tracking with automated reorder alerts and demand forecasting.',
      benefits: ['Reduce stockouts by 60%', 'Optimize inventory levels', 'Automated reordering']
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Comprehensive dashboards showing sales trends, top products, and customer behavior.',
      benefits: ['Identify best-selling items', 'Track seasonal trends', 'Optimize pricing strategies']
    },
    {
      icon: Users,
      title: 'Customer Loyalty Program',
      description: 'Build lasting relationships with automated loyalty rewards and personalized offers.',
      benefits: ['Increase repeat purchases', 'Track customer lifetime value', 'Personalized promotions']
    },
    {
      icon: Smartphone,
      title: 'Mobile Management',
      description: 'Manage your store from anywhere with our mobile-first dashboard and app.',
      benefits: ['Real-time monitoring', 'Mobile payments', 'Staff management']
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Accept all payment methods with secure, fast, and reliable processing.',
      benefits: ['Multiple payment options', 'Secure transactions', 'Fast checkout']
    },
    {
      icon: MessageSquare,
      title: 'Customer Communication',
      description: 'Automated SMS and email campaigns for promotions, reminders, and support.',
      benefits: ['Increase engagement', 'Automated marketing', 'Customer support']
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'AI-powered insights to identify growth opportunities and optimize operations.',
      benefits: ['Predict demand patterns', 'Identify upselling opportunities', 'Optimize store layout']
    },
    {
      icon: AlertTriangle,
      title: 'Low Stock Alerts',
      description: 'Never run out of popular items with intelligent stock monitoring and alerts.',
      benefits: ['Prevent stockouts', 'Automated notifications', 'Smart reordering']
    },
    {
      icon: Target,
      title: 'Targeted Marketing',
      description: 'Send personalized offers and promotions based on customer purchase history.',
      benefits: ['Higher conversion rates', 'Customer segmentation', 'ROI tracking']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encrypted data storage and PCI compliance.',
      benefits: ['Protect customer data', 'Compliance ready', 'Regular security updates']
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Automate repetitive tasks like inventory updates, reporting, and customer follow-ups.',
      benefits: ['Save 15+ hours per week', 'Reduce human errors', 'Focus on growth']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

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
            Everything You Need to Run a Modern Retail Business
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Our comprehensive platform combines all the tools specialty retail businesses need 
            to compete and thrive in today's digital marketplace.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group bg-gradient-to-br from-teal-50 to-saffron-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-teal-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-100 rounded-lg group-hover:bg-saffron-100 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-teal-600 group-hover:text-saffron-600" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 ml-4 group-hover:text-saffron-700 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-charcoal-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-charcoal-500">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RetailFeatures;
