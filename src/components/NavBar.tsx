'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ThemeToggle';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#success', label: 'Success' },
  { href: '#contact', label: 'Contact' },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    NAV_LINKS.forEach(link => {
      sectionRefs.current[link.href.substring(1)] = document.getElementById(link.href.substring(1));
    });

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

    const sections = Object.values(sectionRefs.current);
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <nav
        className={cn(
          'container mx-auto flex items-center justify-between px-6 transition-all duration-300',
          isScrolled ? 'py-2' : 'py-4'
        )}
      >
        <Link href="/">
          <Logo size="sm" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-charcoal-600 hover:text-saffron-500 transition-colors",
                activeSection === link.href.substring(1) && "text-saffron-500 font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button className="bg-teal-500 hover:bg-saffron-500">Get Free Consultation</Button>
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white/80 backdrop-blur-lg transition-transform duration-300 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        onClick={toggleMenu}
      >
        <div
          className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white p-8 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-charcoal-800 hover:text-saffron-500 transition-colors",
                  activeSection === link.href.substring(1) && "text-saffron-500 font-semibold"
                )}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button size="lg" className="mt-6 bg-teal-500 hover:bg-saffron-500">
              Get Free Consultation
            </Button>
            <div className="mt-6">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
