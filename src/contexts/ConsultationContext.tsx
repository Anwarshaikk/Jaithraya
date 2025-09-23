'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: "1-10" | "11-50" | "51-200" | "201+";
  businessType: string;
  currentChallenges: string;
  budget?: string;
  timeline?: string;
  preferredContact?: string;
  additionalInfo?: string;
}

interface ConsultationContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  submitForm: (data: ConsultationFormData) => Promise<void>;
  isSubmitting: boolean;
  submittedData: ConsultationFormData[];
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

interface ConsultationProviderProps {
  children: React.ReactNode;
}

export const ConsultationProvider: React.FC<ConsultationProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormData[]>([]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const submitForm = useCallback(async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send to API endpoint
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      
      // Store in localStorage for immediate access
      const existingData = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
      const newData = [...existingData, { ...data, submittedAt: new Date().toISOString(), id: result.id }];
      localStorage.setItem('consultationSubmissions', JSON.stringify(newData));
      
      // Update state
      setSubmittedData(newData);
      
      console.log('Consultation form submitted successfully:', result);
      
    } catch (error) {
      console.error('Error submitting consultation form:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  // Load existing data from localStorage on mount
  React.useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
    setSubmittedData(existingData);
  }, []);

  const value: ConsultationContextType = {
    isModalOpen,
    openModal,
    closeModal,
    submitForm,
    isSubmitting,
    submittedData
  };

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  );
};
