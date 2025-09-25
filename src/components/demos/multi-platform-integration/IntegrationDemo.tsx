'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { Share2, ArrowRight, MousePointerClick, Zap } from 'lucide-react';
import { DemoSlider } from '../DemoSlider';

const IntegrationDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <h2 className="text-2xl font-bold text-white/90 mb-6">Integration Hub</h2>
      <DemoSlider tabs={["Connections", "Workflow", "API Usage"]}>
        <Connections />
        <Workflow />
        <ApiUsage />
      </DemoSlider>
    </DemoFrame>
  );
};

const logos = [
  '/images/logos/tech/shopify.svg', '/images/logos/tech/stripe.svg',
  '/images/logos/tech/salesforce.svg', '/images/logos/tech/slack.svg',
];
const Connections = () => (
  <div className="h-96 relative flex items-center justify-center">
    {logos.map((logo, i) => (
      <motion.img key={logo} src={logo} alt="logo" className="w-16 h-16 absolute bg-white/10 p-2 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x: Math.cos((i/logos.length)*2*Math.PI)*150, y: Math.sin((i/logos.length)*2*Math.PI)*150 }}
        transition={{ delay: i * 0.2, type: 'spring' }}
      />
    ))}
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: logos.length * 0.2 }}
      className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
      <Share2 size={48} />
    </motion.div>
  </div>
);

const Workflow = () => (
  <div className="space-y-4 h-96">
    <WorkflowStep icon={<MousePointerClick/>} title="Trigger: New Sale in Shopify" />
    <div className="pl-8"><ArrowRight className="text-gray-600" /></div>
    <WorkflowStep icon={<Zap/>} title="Action: Create Invoice in Stripe" />
    <div className="pl-8"><ArrowRight className="text-gray-600" /></div>
    <WorkflowStep icon={<Zap/>} title="Action: Send Notification to Slack" />
  </div>
);

const ApiUsage = () => (
  <div className="h-96 bg-white/5 rounded-lg p-6 text-center flex flex-col justify-center">
    <p className="text-7xl font-bold text-green-400">2.1M</p>
    <p className="text-gray-400 mt-2">API Calls Last 30 Days</p>
  </div>
);

const WorkflowStep = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex items-center bg-white/5 p-4 rounded-lg">
    <div className="text-green-400">{icon}</div>
    <p className="ml-4 font-semibold text-white/90">{title}</p>
  </div>
);

export default IntegrationDemo;
