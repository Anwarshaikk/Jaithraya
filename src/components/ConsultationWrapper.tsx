'use client';

import React from 'react';
import ConsultationModal from './modals/ConsultationModal';
import { useConsultation } from '@/contexts/ConsultationContext';

const ConsultationWrapper: React.FC = () => {
  const { isModalOpen, closeModal, submitForm } = useConsultation();

  return (
    <ConsultationModal
      isOpen={isModalOpen}
      onClose={closeModal}
      onSubmit={submitForm}
    />
  );
};

export default ConsultationWrapper;
