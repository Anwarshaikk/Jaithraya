'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  currentChallenges: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  additionalInfo: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ConsultationFormData) => Promise<void>;
}

const businessTypes = [
  'Cleaning Service',
  'Restaurant/Food Service',
  'Retail Store',
  'Convenience Store',
  'Smoke Shop',
  'Professional Services',
  'Healthcare',
  'Other'
];

const budgetRanges = [
  'Under $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not sure yet'
];

const timelineOptions = [
  'ASAP (Within 1 month)',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring options'
];

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    currentChallenges: '',
    budget: '',
    timeline: '',
    preferredContact: 'email',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<ConsultationFormData>>({});

  const handleInputChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ConsultationFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.businessType) newErrors.businessType = 'Please select your business type';
    if (!formData.currentChallenges.trim()) newErrors.currentChallenges = 'Please describe your current challenges';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setIsSuccess(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          businessType: '',
          currentChallenges: '',
          budget: '',
          timeline: '',
          preferredContact: 'email',
          additionalInfo: ''
        });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-saffron-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-saffron-50 via-saffron-100 to-teal-50 px-6 py-6 text-gray-800 relative overflow-hidden border-b border-saffron-100">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/40 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-saffron-100/40 rounded-full translate-y-12 -translate-x-12 blur-lg"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-800">Get Your Free Consultation</h2>
                  <p className="text-gray-600 text-lg">Let's discuss how we can transform your business</p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 disabled:opacity-50 hover:scale-110 text-gray-600 hover:text-gray-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-saffron-500 to-teal-500 rounded-full mx-auto flex items-center justify-center animate-pulse">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-saffron-500 to-teal-500 rounded-full mx-auto animate-ping opacity-20"></div>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-saffron-600 to-teal-600 bg-clip-text text-transparent mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    We've received your information and will contact you within 24 hours.
                  </p>
                  <div className="bg-gradient-to-r from-saffron-50 to-teal-50 border border-saffron-200 rounded-xl p-6 shadow-lg">
                    <p className="text-gray-800 text-sm">
                      <strong className="text-saffron-600">Next Steps:</strong> We'll review your requirements and prepare a custom proposal for your business.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="bg-gradient-to-r from-saffron-50 to-teal-50 rounded-xl p-6 border border-saffron-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full mr-3"></div>
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300",
                          errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                        )}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300",
                          errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                        )}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300",
                          errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                        )}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300",
                          errors.company ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                        )}
                        placeholder="Your company name"
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className="bg-gradient-to-r from-teal-50 to-saffron-50 rounded-xl p-6 border border-teal-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      Business Information
                    </h3>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300",
                        errors.businessType ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                      )}
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Business Challenges *
                    </label>
                    <textarea
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                      rows={3}
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300 resize-none",
                        errors.currentChallenges ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                      )}
                      placeholder="What challenges are you facing with your current business operations?"
                    />
                    {errors.currentChallenges && <p className="text-red-500 text-sm mt-1">{errors.currentChallenges}</p>}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-gradient-to-r from-saffron-50 via-teal-50 to-saffron-50 rounded-xl p-6 border border-saffron-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-saffron-500 to-teal-500 rounded-full mr-3"></div>
                      Project Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    </div>

                    <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="mr-3 w-4 h-4 text-saffron-500 focus:ring-saffron-500 focus:ring-2"
                        />
                        <span className="text-gray-700 group-hover:text-saffron-600 transition-colors">Email</span>
                      </label>
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="mr-3 w-4 h-4 text-teal-500 focus:ring-teal-500 focus:ring-2"
                        />
                        <span className="text-gray-700 group-hover:text-teal-600 transition-colors">Phone Call</span>
                      </label>
                    </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-saffron-50 rounded-xl p-6 border border-teal-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      Additional Information
                    </h3>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                      <textarea
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 hover:border-saffron-300 resize-none"
                        placeholder="Any additional details about your project or specific requirements..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-saffron-400 via-saffron-500 to-teal-400 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-saffron-500 hover:via-saffron-600 hover:to-teal-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Schedule My Free Consultation
                          <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </>
                      )}
                    </button>
                    <div className="mt-4 p-4 bg-gradient-to-r from-saffron-50 to-teal-50 rounded-lg border border-saffron-200">
                      <p className="text-sm text-gray-600 text-center">
                        <span className="font-semibold text-saffron-600">* Required fields.</span> We'll contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
