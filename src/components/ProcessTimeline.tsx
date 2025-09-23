'use client';
import React from 'react';
import ProcessStep from './ProcessStep';
import { motion } from 'framer-motion';
import { ClipboardList, Bot, LineChart } from 'lucide-react';

const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    title: '1. Discovery & Strategy',
    description: [
      'We begin with a deep dive into your current workflows and challenges.',
      'Together, we map out your customer journey to identify automation opportunities.',
      'Our team analyzes your operational data to find key efficiency bottlenecks.',
      'We define clear, measurable goals for your digital transformation project.',
    ],
    whatYouGet: [
      'A comprehensive workflow audit document.',
      'A strategic automation roadmap.',
      'Defined Key Performance Indicators (KPIs).',
    ],
  },
  {
    icon: Bot,
    title: '2. Solution Design & Implementation',
    description: [
      'We design a tailored AI-powered solution architecture for your needs.',
      'Our experts configure and integrate the necessary tools and platforms.',
      'Custom automation scripts and AI models are developed and rigorously tested.',
      'We ensure a seamless data migration and system integration process.',
    ],
    whatYouGet: [
      'A fully configured automation platform.',
      'Custom-built AI integrations.',
      'A live, tested, and operational system.',
    ],
  },
  {
    icon: LineChart,
    title: '3. Optimization & Growth',
    description: [
      'We continuously monitor the performance of the new automated systems.',
      'Regular analysis of KPIs is conducted to measure impact and ROI.',
      'Our team provides ongoing support and iterative improvements.',
      'We help you scale the solution as your business grows and evolves.',
    ],
    whatYouGet: [
      'Detailed monthly performance reports.',
      'Ongoing technical and strategic support.',
      'A scalable platform for future growth.',
    ],
  },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900">
            Results in Three Simple Steps
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Our proven method ensures a smooth transition to a more efficient, automated business operation.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5">
            <motion.div
              className="h-full bg-teal-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>
          <div className="relative flex justify-between">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="w-8 h-8 bg-white border-4 border-teal-500 rounded-full mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:-mt-4">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
