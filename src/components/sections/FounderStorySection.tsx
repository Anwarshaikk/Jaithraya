'use client';
import React from 'react';
import { ABOUT_SECTION } from '@/constants';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const FounderStorySection = () => {
  const accordionItems = [
    {
      title: 'My Journey',
      content: (
        <>
          <p>{ABOUT_SECTION.founder.story}</p>
          <p className="font-medium text-charcoal-800">{ABOUT_SECTION.founder.location}</p>
        </>
      ),
    },
    {
      title: 'Meaning of the Name',
      content: (
        <>
          <p>{ABOUT_SECTION.brandStory.content}</p>
          <p>{ABOUT_SECTION.brandStory.description}</p>
        </>
      ),
    },
    {
      title: 'Our Mission',
      content: <p>{ABOUT_SECTION.brandStory.philosophy}</p>,
    },
  ];

  return (
    <motion.div className="mb-24" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
          {ABOUT_SECTION.founder.title}
        </h2>
        <p className="text-xl text-saffron-600 font-semibold mb-6">
          {ABOUT_SECTION.founder.subtitle}
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-saffron-100">
        <Accordion items={accordionItems} />
      </motion.div>
    </motion.div>
  );
};

export default FounderStorySection;
