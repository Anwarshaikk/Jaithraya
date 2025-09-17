'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FINAL_CTA_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

interface FloatingCTAProps {
  className?: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled past the hero section (approximate height)
      if (window.pageYOffset > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={cn('fixed bottom-6 right-6 z-40', className)}
        >
          <Link
            href={FINAL_CTA_SECTION.ctaHref}
            className="bg-saffron-500 text-white rounded-full px-6 py-3 font-semibold hover:bg-saffron-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
          >
            <Phone size={20} />
            <span>Schedule Call</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
