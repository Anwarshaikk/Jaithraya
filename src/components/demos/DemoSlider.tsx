'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoSliderProps {
  tabs: string[];
  children: React.ReactNode[];
}

export function DemoSlider({ tabs, children }: DemoSliderProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex justify-center space-x-2 bg-gray-900/50 p-2 rounded-lg mb-6">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors relative ${
              activeTab === index ? 'text-white' : 'text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            {activeTab === index && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-gray-600/50 rounded-md"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {children[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
