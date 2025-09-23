'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Label } from '@/components/ui/Label';
import { toast } from 'sonner';
import Confetti from 'react-confetti';
import logEvent from '@/lib/analytics';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  companySize: z.enum(['1-10', '11-50', '51-200', '201+']),
});

type FormData = z.infer<typeof schema>;

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Mock submission
  onSubmit: (data: FormData) => Promise<{ success: true }>;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStartTime(Date.now());
    }
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: FormData) => {
    try {
      const formDuration = (Date.now() - startTime) / 1000;
      // onOpen and onSubmitSuccess event hooks can be called here in a real app
      await onSubmit(data);
      logEvent({
        name: 'consult_submit_success',
        properties: {
          form_duration: formDuration,
        },
      });
      setIsSuccess(true);
      setShowConfetti(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    reset();
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                  <h3 className="mt-4 text-2xl font-bold text-charcoal-800">
                    Submission successful!
                  </h3>
                  <p className="mt-2 text-charcoal-600">
                    Thanks for your interest. We'll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-charcoal-800">
                        Free Consultation
                      </h3>
                      <p className="mt-1 text-charcoal-600 leading-relaxed text-lg">
                        Let's discuss your business goals.
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-neutral-500 hover:text-neutral-800"
                      aria-label="Close modal"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="mt-8 space-y-6"
                  >
                    <div>
                      <Label htmlFor="name" className="text-base">Full Name</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="e.g., Jane Doe"
                        aria-invalid={errors.name ? 'true' : 'false'}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="jane.doe@example.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="companySize" className="text-base">Company Size</Label>
                      <Select
                        onValueChange={(value) =>
                          control.setValue('companySize', value)
                        }
                        defaultValue=""
                      >
                        <SelectTrigger
                          id="companySize"
                          aria-invalid={errors.companySize ? 'true' : 'false'}
                        >
                          <SelectValue placeholder="Select size..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201+">201+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.companySize && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.companySize.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Submit Request
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
