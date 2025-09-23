'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';

const MobileCTA = () => {
  const { openModal } = useConsultation();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 border-t border-saffron-200 z-50"
    >
      <Button onClick={openModal} className="w-full bg-teal-500 hover:bg-saffron-500">
        Get Free Consultation
      </Button>
    </motion.div>
  );
};

export default MobileCTA;
