'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, APP_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm',
        isScrolled 
          ? 'bg-gradient-to-r from-saffron-50/90 via-saffron-100/90 to-orange-200/90 backdrop-blur-sm' 
          : 'bg-gradient-to-r from-saffron-50 via-saffron-100 to-orange-200'
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-saffron-600"
        >
          <Link href="/" className="hover:text-accent-600 transition-colors">
            {APP_CONFIG.name}
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center space-x-2">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 transition-all duration-300 rounded-full',
                item.isButton
                  ? 'bg-saffron-500 text-white hover:bg-saffron-600 shadow-sm'
                  : 'text-neutral-600 hover:bg-saffron-50 hover:text-neutral-900'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-700">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white py-4 px-6"
        >
          <nav className="flex flex-col space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-4 py-2 transition-all duration-300 rounded-full text-center',
                  item.isButton
                    ? 'bg-saffron-500 text-white hover:bg-saffron-600 shadow-sm'
                    : 'text-neutral-600 hover:bg-saffron-50 hover:text-neutral-900'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
