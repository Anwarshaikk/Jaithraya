import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className,
  showText = false 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  };

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 24
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {/* Logo Icon */}
      <div className={cn(
        'flex items-center justify-center rounded-md bg-saffron-500 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105',
        sizeClasses[size]
      )}>
        <svg 
          width={iconSize[size]} 
          height={iconSize[size]} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <rect width="32" height="32" rx="6" fill="currentColor" className="text-saffron-500" />
          <text 
            x="16" 
            y="22" 
            fontFamily="Arial, sans-serif" 
            fontSize="18" 
            fontWeight="bold" 
            textAnchor="middle" 
            fill="white"
          >
            J
          </text>
        </svg>
      </div>
      
      {/* Optional Text */}
      {showText && (
        <span className={cn(
          'font-bold text-charcoal-900',
          textSizeClasses[size]
        )}>
          Jaithraya
        </span>
      )}
    </div>
  );
};

export default Logo;
