import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className,
  showText = false,
  showTagline = false
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

  const taglineSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 24
  };

  return (
    <div className={cn('flex items-center space-x-3 group cursor-pointer', className)}>
      {/* Logo Icon - Boxed J with gradient */}
      <div className={cn(
        'flex items-center justify-center rounded-md bg-gradient-to-br from-saffron-400 via-saffron-500 to-teal-400 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-110',
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
            y="26" 
            fontFamily="Arial, sans-serif" 
            fontSize="22" 
            fontWeight="bold" 
            textAnchor="middle" 
            fill="white"
          >
            J
          </text>
        </svg>
      </div>
      
      {/* Company Name and Tagline */}
      {(showText || showTagline) && (
        <div className="flex flex-col">
          {/* Company Name */}
          {showText && (
            <span className={cn(
              'font-bold text-charcoal-900 group-hover:text-saffron-500 transition-colors duration-300',
              textSizeClasses[size]
            )}>
              Jaithraya
            </span>
          )}
          
          {/* Tagline */}
          {showTagline && (
            <span className={cn(
              'text-saffron-500 group-hover:text-charcoal-900 transition-colors duration-300',
              taglineSizeClasses[size]
            )}>
              AI-Driven Business Automation
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
