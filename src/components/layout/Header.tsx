import React from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, APP_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300', className)}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-charcoal-900">
          <Link href="/" className="hover:text-saffron-600 transition-colors duration-300">
            {APP_CONFIG.name}
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-2 transition-all duration-300 hover:scale-105',
                'isButton' in item && item.isButton
                  ? 'bg-saffron-500 text-white rounded-full hover:bg-saffron-600 hover:shadow-lg'
                  : 'text-charcoal-600 hover:text-accent-500'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
