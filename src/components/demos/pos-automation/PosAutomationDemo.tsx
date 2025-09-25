'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Database, Zap, ArrowRight } from 'lucide-react';

const steps = [
  { icon: <ShoppingCart />, label: 'POS System', description: 'Real-time sales data from all your retail locations.' },
  { icon: <Zap />, label: 'ETL Process', description: 'Data is cleaned, transformed, and structured for analysis.' },
  { icon: <Database />, label: 'Data Warehouse', description: 'Insights are ready for your BI tools and dashboards.' },
];

const PosAutomationDemo = ({ item }: { item: ShowcaseItem }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <DemoFrame item={item}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white/90">Automated Data Pipeline</h2>
        <div className="mt-12 flex items-center justify-center space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Node icon={step.icon} label={step.label} isActive={index <= activeStep} />
              {index < steps.length - 1 && <Connector isActive={index < activeStep} />}
            </React.Fragment>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 text-gray-400 h-10"
          >
            {steps[activeStep].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </DemoFrame>
  );
};

const Node = ({ icon, label, isActive }: { icon: React.ReactNode, label: string, isActive: boolean }) => (
  <div className="text-center">
    <div className={`w-24 h-24 bg-gray-900/50 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110' : ''}`}>
      <div className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-inner transition-colors duration-500 ${isActive ? 'text-indigo-400' : 'text-gray-600'}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
    </div>
    <p className={`mt-4 font-semibold transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>{label}</p>
  </div>
);

const Connector = ({ isActive }: { isActive: boolean }) => (
  <ArrowRight className={`text-gray-600 transition-colors duration-500 ${isActive ? 'text-indigo-400' : ''}`} size={48} />
);

export default PosAutomationDemo;
