'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Calendar, Building, DollarSign, Clock, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import { withAuth, useAuth } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface ConsultationData {
  id: string;
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
  submittedAt: string;
}

function ConsultationsPage() {
  const [consultations, setConsultations] = useState<ConsultationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  const fetchConsultations = useCallback(async () => {
    if (!user) return;
    try {
      setLoading(true);
      const token = await user.getIdToken();
      const response = await fetch('/api/consultation', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch consultations');
      
      const data = await response.json();
      setConsultations(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchConsultations();
    }
  }, [user, fetchConsultations]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  const exportToCSV = () => {
    if (consultations.length === 0) return;

    const headers = [
      'Name', 'Email', 'Phone', 'Company', 'Business Type', 
      'Current Challenges', 'Budget', 'Timeline', 'Preferred Contact',
      'Additional Info', 'Submitted At'
    ];

    const csvContent = [
      headers.join(','),
      ...consultations.map(consultation => [
        `"${consultation.name}"`,
        `"${consultation.email}"`,
        `"${consultation.phone}"`,
        `"${consultation.company}"`,
        `"${consultation.businessType}"`,
        `"${consultation.currentChallenges.replace(/"/g, '""')}"`,
        `"${consultation.budget}"`,
        `"${consultation.timeline}"`,
        `"${consultation.preferredContact}"`,
        `"${consultation.additionalInfo.replace(/"/g, '""')}"`,
        `"${new Date(consultation.submittedAt).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `consultations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading consultations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Error</h1>
          <p className="text-gray-600">{error}</p>
          <Button
            onClick={fetchConsultations}
            className="mt-4 bg-saffron-500 hover:bg-teal-500"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Consultation Submissions</h1>
              <p className="text-gray-600 mt-2">
                {consultations.length} submission{consultations.length !== 1 ? 's' : ''} received
              </p>
            </div>
            <Button
              onClick={exportToCSV}
              disabled={consultations.length === 0}
              className="bg-saffron-500 hover:bg-teal-500"
            >
              <Download className="w-5 h-5 mr-2" />
              Export CSV
            </Button>
            <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
              Logout
            </Button>
          </div>
        </div>

        {/* Consultations List */}
        {consultations.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No consultations yet</h3>
            <p className="text-gray-600">Consultation submissions will appear here once customers start filling out the form.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {consultations.map((consultation, index) => (
              <motion.div
                key={consultation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column - Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center">
                        <span className="text-saffron-600 font-semibold text-lg">
                          {consultation.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{consultation.name}</h3>
                        <p className="text-gray-600">{consultation.company}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{consultation.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{consultation.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Building className="w-4 h-4" />
                        <span>{consultation.businessType}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(consultation.submittedAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Current Challenges</h4>
                      <p className="text-gray-600 text-sm">{consultation.currentChallenges}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Budget</h4>
                        <p className="text-gray-600 text-sm flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {consultation.budget || 'Not specified'}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
                        <p className="text-gray-600 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {consultation.timeline || 'Not specified'}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Preferred Contact</h4>
                      <p className="text-gray-600 text-sm capitalize">{consultation.preferredContact}</p>
                    </div>

                    {consultation.additionalInfo && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Additional Info</h4>
                        <p className="text-gray-600 text-sm">{consultation.additionalInfo}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuth(ConsultationsPage);
