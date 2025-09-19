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
      {/* Logo Icon - Triangle */}
      <svg
        width={iconSize[size]}
        height={iconSize[size]}
        viewBox="0 0 100 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizeClasses[size], 'transition-all duration-300 group-hover:scale-110')}
      >
        <path 
          d="M50 0 L0 87 L50 58Z" 
          className="fill-saffron-400 group-hover:fill-teal-400 transition-colors duration-300"
        />
        <path 
          d="M50 0 L100 87 L50 58Z" 
          className="fill-teal-400 group-hover:fill-saffron-500 transition-colors duration-300"
        />
        <path 
          d="M0 87 L100 87 L50 58Z" 
          className="fill-saffron-500 group-hover:fill-saffron-400 transition-colors duration-300"
        />
      </svg>

      {/* Company Name and Tagline */}
      {(showText || showTagline) && (
        <div className="flex flex-col">
          {/* Company Name */}
          {showText && (
            <span className={cn(
              'font-bold text-saffron-500 group-hover:text-teal-600 transition-colors duration-300', 
              textSizeClasses[size]
            )}>
              Jaithraya
            </span>
          )}
          
          {/* Tagline */}
          {showTagline && (
            <span className={cn(
              'text-teal-600 group-hover:text-saffron-500 transition-colors duration-300',
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
