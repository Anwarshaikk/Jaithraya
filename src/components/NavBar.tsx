'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { useConsultation } from '@/contexts/ConsultationContext';
import { NAVIGATION_ITEMS } from '@/constants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useConsultation();

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
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {NAVIGATION_ITEMS.map((item) => {
              if ('hasDropdown' in item && item.hasDropdown) {
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.dropdownItems?.map((component) => (
                          <ListItem
                            key={component.label}
                            title={component.label}
                            href={component.href}
                          >
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              if (item.isButton) return null;
              return (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center gap-2">
          <Button 
            variant="primary" 
            onClick={openModal}
            className="bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600"
          >
            Get Free Consultation
          </Button>
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
            {NAVIGATION_ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-charcoal-800 hover:text-saffron-500 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              size="lg" 
              variant="primary"
              onClick={openModal}
              className="mt-6 bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600"
            >
              Get Free Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavBar;
