// Global type definitions for the Jaithraya project

export interface NavItem {
  label: string;
  href: string;
  isButton: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export interface BusinessSolution {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

// Component Props Types
export interface HeaderProps {
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
