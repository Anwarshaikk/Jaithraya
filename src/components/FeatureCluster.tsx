'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Users,
  CreditCard,
  BarChart,
  ShieldCheck,
  Bell,
  Clock,
  Mail,
  PieChart,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

const CLUSTERS = [
  {
    title: 'Scheduling & Booking',
    tagline: 'Automate your calendar and streamline client appointments.',
    features: [
      { icon: CalendarDays, text: 'Smart, automated scheduling based on availability' },
      { icon: Clock, text: 'Real-time staff and resource calendar management' },
      { icon: Bell, text: 'Automated appointment reminders and notifications' },
    ],
  },
  {
    title: 'Customer & Payments',
    tagline: 'Manage client relationships and simplify transactions.',
    features: [
      { icon: Users, text: 'Integrated CRM for comprehensive client history' },
      { icon: Mail, text: 'Personalized email and SMS reminder campaigns' },
      { icon: CreditCard, text: 'Secure online payment processing and invoicing' },
    ],
  },
  {
    title: 'Analytics & Ops',
    tagline: 'Gain insights and secure your business operations.',
    features: [
      { icon: BarChart, text: 'Customizable performance and revenue dashboards' },
      { icon: PieChart, text: 'Automated operational compliance and audit trails' },
      { icon: ShieldCheck, text: 'Enhanced data security and privacy controls' },
    ],
  },
];

type Cluster = typeof CLUSTERS[number];

const FeatureCard: React.FC<{ cluster: Cluster }> = ({ cluster }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: 'var(--tw-shadow-elevated)' }}
    className="bg-white rounded-xl p-8 border border-transparent hover:border-teal-200 transition-all duration-300 shadow-soft h-full"
  >
    <h3 className="text-2xl font-bold text-charcoal-800 mb-3">{cluster.title}</h3>
    <p className="text-charcoal-600 mb-6 leading-relaxed">{cluster.tagline}</p>
    <ul className="space-y-3">
      {cluster.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <feature.icon className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
          <span className="text-charcoal-700">{feature.text}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const FeatureCluster = () => {
  return (
    <section id="features" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900">
            A Smarter Way to Run Your Business
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            From automated booking to seamless payments, our toolkit helps you save time and boost your bottom line.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLUSTERS.map((cluster) => (
            <FeatureCard key={cluster.title} cluster={cluster} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {CLUSTERS.map((cluster) => (
              <AccordionItem key={cluster.title} value={cluster.title}>
                <AccordionTrigger className="text-xl font-semibold">
                  {cluster.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-charcoal-600 mb-6 leading-relaxed">{cluster.tagline}</p>
                  <ul className="space-y-3">
                    {cluster.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <feature.icon className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-charcoal-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FeatureCluster;
