'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(0);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border-b border-saffron-200 last:border-b-0">
          <motion.header
            initial={false}
            onClick={() => setExpanded(expanded === index ? false : index)}
            className="flex justify-between items-center p-6 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-charcoal-800">{item.title}</h3>
            <ChevronDown
              className={`transform transition-transform duration-300 ${
                expanded === index ? 'rotate-180' : ''
              }`}
            />
          </motion.header>
          <AnimatePresence initial={false}>
            {expanded === index && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-lg text-charcoal-700 leading-relaxed space-y-4">
                  {item.content}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
