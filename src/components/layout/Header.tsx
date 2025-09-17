import React from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, APP_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';
import { HeaderProps } from '@/types';
import Logo from '@/components/ui/Logo';

const Header: React.FC<HeaderProps> = ({ className }) => {
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
