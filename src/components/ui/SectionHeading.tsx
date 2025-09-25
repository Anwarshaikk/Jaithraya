import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2
        className={`text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
