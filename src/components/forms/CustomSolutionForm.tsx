'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { CheckCircle, Send, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useConsultation } from '@/contexts/ConsultationContext';

interface CustomSolutionFormProps {
  className?: string;
  onSuccess?: () => void;
}

const CustomSolutionForm: React.FC<CustomSolutionFormProps> = ({ className, onSuccess }) => {
  const { openModal } = useConsultation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    businessSize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const industries = [
    'Healthcare & Medical',
    'Real Estate',
    'Legal Services',
    'Financial Services',
    'Manufacturing',
    'Construction',
    'Education',
    'Non-Profit',
    'Technology',
    'Automotive',
    'Beauty & Wellness',
    'Fitness & Sports',
    'Entertainment',
    'Travel & Tourism',
    'Other'
  ];

  const businessSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Just exploring options'
  ];

  const budgets = [
    'Under $2,500/month',
    '$2,500 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    '$25,000+/month',
    'Not sure yet'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log the form data (in production, this would be sent to your API)
      console.log('Custom Solution Form Submission:', formData);
      
      setIsSubmitted(true);
      
      // Open consultation modal with pre-filled data
      setTimeout(() => {
        openModal();
        if (onSuccess) onSuccess();
      }, 1500);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-r from-teal-500 to-saffron-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your custom solution request. Our team will review your information 
          and get back to you within 24 hours with a tailored proposal.
        </p>
        <Button
          onClick={openModal}
          className="bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white"
        >
          Schedule Your Free Consultation
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 ${className}`}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Custom Solution</h3>
        <p className="text-gray-600">
          Tell us about your business and we'll create a tailored marketing strategy just for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your full name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building2 className="w-4 h-4 inline mr-2" />
              Company Name
            </label>
            <Input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your company name"
              className="w-full"
            />
          </div>
        </div>

        {/* Business Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry *
            </label>
            <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Size
            </label>
            <Select value={formData.businessSize} onValueChange={(value) => handleInputChange('businessSize', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select business size" />
              </SelectTrigger>
              <SelectContent>
                {businessSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Current Marketing Challenges *
          </label>
          <Textarea
            value={formData.currentChallenges}
            onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
            placeholder="What marketing challenges are you currently facing?"
            rows={3}
            required
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marketing Goals
          </label>
          <Textarea
            value={formData.goals}
            onChange={(e) => handleInputChange('goals', e.target.value)}
            placeholder="What are your main marketing goals and objectives?"
            rows={3}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeline
            </label>
            <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="When do you want to start?" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline} value={timeline}>
                    {timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((budget) => (
                  <SelectItem key={budget} value={budget}>
                    {budget}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <Textarea
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
            placeholder="Any other details you'd like us to know about your business or requirements?"
            rows={3}
            className="w-full"
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.industry || !formData.currentChallenges}
            className="w-full bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Custom Solution Request
              </>
            )}
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </motion.div>
  );
};

export default CustomSolutionForm;

