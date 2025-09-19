'use client';
import React from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, ABOUT_SECTION } from '@/constants';
import { cn } from '@/lib/utils';
import { HeaderProps } from '@/types';
import Logo from '@/components/ui/Logo';
import { toast } from 'sonner';
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { phone, email, location } = ABOUT_SECTION.contact.details;

  const showContactInfo = () => {
    toast.info(
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-bold">Contact Us</h3>
        <a href={`tel:${phone}`} className="flex items-center space-x-2 hover:text-saffron-500">
          <Phone size={16} />
          <span>{phone}</span>
        </a>
        <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-saffron-500">
          <Mail size={16} />
          <span>{email}</span>
        </a>
        <p className="flex items-center space-x-2">
          <MapPin size={16} />
          <span>{location}</span>
        </p>
        <div className="flex space-x-4 pt-2">
            <a href="https://www.linkedin.com/company/jaithraya-ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/jaithraya_ai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61581240110967" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Facebook size={24} />
            </a>
        </div>
      </div>
    );
  };
  
  return (
    <header className={cn('sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300', className)}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <Link 
            href="/" 
            className="group relative overflow-hidden rounded-lg px-2 py-1 -mx-2 -my-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-saffron-50 hover:to-accent-50 hover:shadow-md"
          >
            <Logo 
              size="lg" 
              showText={true} 
              showTagline={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-saffron-100 to-accent-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-1">
          {NAVIGATION_ITEMS.map((item) => {
            if (item.isButton) {
              return (
                <button
                  key={item.label}
                  onClick={showContactInfo}
                  className="px-3 py-2 transition-all duration-300 hover:scale-105 bg-saffron-500 text-white rounded-full hover:bg-teal-500 hover:shadow-lg"
                >
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 transition-all duration-300 hover:scale-105 text-charcoal-600 hover:text-accent-500"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
