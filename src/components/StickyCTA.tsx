'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useConsultation } from '@/contexts/ConsultationContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import logEvent from '@/lib/analytics';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useConsultation();

  const handleCTAClick = () => {
    logEvent({ name: 'sticky_cta_click' });
    openModal();
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;
      setIsVisible(scrollPercent > 30);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="container mx-auto p-4">
            <div className="flex items-center justify-between rounded-lg bg-white/80 p-4 shadow-elevated backdrop-blur-md">
              <div className="hidden sm:block">
                <Select defaultValue="growth">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter Plan</SelectItem>
                    <SelectItem value="growth">Growth Plan</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="hidden font-semibold text-charcoal-800 sm:block">
                Ready to transform your business?
              </p>
              <Button onClick={handleCTAClick} variant="primary">
                Start My Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
