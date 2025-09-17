import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  onClick,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-full transition duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-saffron-400 via-saffron-500 to-teal-400 text-white hover:from-saffron-500 hover:via-saffron-600 hover:to-teal-500 hover:scale-105 shadow-md hover:shadow-lg',
    secondary: 'bg-charcoal-600 text-white hover:bg-charcoal-700 hover:scale-105',
    outline: 'border-2 border-saffron-400 text-saffron-600 hover:bg-gradient-to-r hover:from-saffron-400 hover:to-teal-400 hover:text-white hover:scale-105',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
