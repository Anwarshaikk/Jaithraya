'use client';
import { ShowcaseItem } from '@/data/showcase';
import { motion } from 'framer-motion';
import React from 'react';

interface DemoFrameProps {
  children: React.ReactNode;
  item: ShowcaseItem;
}

export function DemoFrame({ children, item }: DemoFrameProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2D3748] rounded-xl shadow-2xl overflow-hidden border border-gray-700 w-[780px]"
    >
      <div className="h-10 bg-gray-900 flex items-center px-4 justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="bg-gray-800 rounded-md px-4 py-1 text-xs text-gray-400">
          {`https://jaithraya.com/showcase/${item.slug}`}
        </div>
        <div className="w-12"></div>
      </div>
      <div className="p-10">
        {children}
      </div>
    </motion.div>
  );
}
