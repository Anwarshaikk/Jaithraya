import React from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, APP_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('bg-white shadow-md', className)}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            {APP_CONFIG.name}
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-2 transition-colors',
                'isButton' in item && item.isButton
                  ? 'bg-blue-600 text-white rounded-full hover:bg-blue-700'
                  : 'text-gray-600 hover:text-gray-800'
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
