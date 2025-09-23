'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { APP_CONFIG, NAVIGATION_ITEMS } from '@/constants';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const { name } = APP_CONFIG;
  const currentYear = new Date().getFullYear();

  // Hide footer on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'Professional Services', href: '/solutions/professional-services' },
        { label: 'Retail & Specialty', href: '/solutions/retail-specialty' },
        { label: 'Food & Hospitality', href: '/solutions/food-hospitality' },
        { label: 'Lifestyle & Events', href: '/solutions/lifestyle-events' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Digital Presence', href: '/services/digital-presence' },
        { label: 'Operations Automation', href: '/services/automation' },
        { label: 'Customer Engagement', href: '/services/engagement' },
        { label: 'Analytics & AI', href: '/services/analytics' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Process', href: '/#process' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Pricing', href: '/pricing' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Support Center', href: '/support' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/jaithraya-ai', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/jaithraya_ai/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61581240110967', label: 'Facebook' },
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Social */}
          <div className="md:col-span-1">
            <Logo 
              size="lg" 
              showText={true} 
              showTagline={true}
              className="text-white mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered solutions for independent service and specialty retail businesses. 
              We help you compete and win in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-saffron-400" />
                <a href="tel:2037100790" className="hover:text-saffron-400 transition-colors">
                  2037100790
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-saffron-400" />
                <a href="mailto:anwarrashidshaik@jaithraya.com" className="hover:text-saffron-400 transition-colors">
                  anwarrashidshaik@jaithraya.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-saffron-400" />
                <span>West Haven, CT, USA (Serving Globally)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-saffron-400 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-neutral-300 hover:text-saffron-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-neutral-300 hover:text-saffron-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-neutral-300">
              123 Innovation Drive, Suite 456
              <br />
              Tech City, TX 75001
            </p>
            <p className="mt-2 text-neutral-300">
              <a href="mailto:contact@jaithraya.ai" className="hover:text-saffron-400">
                contact@jaithraya.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
