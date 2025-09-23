'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SECTIONS = [
  { id: 'features', label: 'Features' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'success', label: 'Success Stories' },
  { id: 'contact', label: 'Contact' },
];

const PageTOC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <aside className="sticky top-24 hidden lg:block">
      <nav>
        <h3 className="mb-4 font-semibold text-charcoal-800">On this page</h3>
        <ul className="space-y-3">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={cn(
                  'block text-sm transition-colors hover:text-saffron-500',
                  activeSection === section.id
                    ? 'font-semibold text-saffron-500'
                    : 'text-charcoal-600'
                )}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default PageTOC;
