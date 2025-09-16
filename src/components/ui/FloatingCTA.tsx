import React from 'react';
import Link from 'next/link';
import { FINAL_CTA_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface FloatingCTAProps {
  className?: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ className }) => {
  return (
    <div className={cn('fixed bottom-6 right-6 z-40 md:hidden', className)}>
      <Link
        href={FINAL_CTA_SECTION.ctaHref}
        className="bg-saffron-500 text-white rounded-full px-6 py-3 font-semibold hover:bg-saffron-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span>Schedule Call</span>
      </Link>
    </div>
  );
};

export default FloatingCTA;
