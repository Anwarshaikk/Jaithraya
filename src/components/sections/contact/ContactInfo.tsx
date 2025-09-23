import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['2037100790'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['anwarrashidshaik@jaithraya.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['West Haven, CT, USA'],
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed'],
      description: 'We\'re here to help'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">Multiple ways to reach us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                <contact.icon className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {contact.title}
              </h3>
              
              <div className="space-y-1 mb-3">
                {contact.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm text-center">
                    {detail}
                  </p>
                ))}
              </div>
              
              <p className="text-gray-500 text-xs text-center">
                {contact.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Prefer to Chat?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team is available for live chat support during business hours. 
              Get instant answers to your questions and personalized recommendations.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
