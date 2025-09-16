// Application constants

export const APP_CONFIG = {
  name: 'Jaithraya',
  tagline: 'AI-Powered Solutions for Your Business',
  description: 'Stop Guessing. Start Growing.',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'C-Store Solutions', href: '/solutions/c-stores' },
  { label: 'Online Businesses', href: '/solutions/online-businesses' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact', isButton: true },
] as const;

export const HERO_SECTION = {
  title: 'Stop Guessing. Start Growing.',
  subtitle: 'AI-Powered Solutions for Your Business.',
  valueProposition: 'Tailored AI strategies that pay for themselves in months.',
  ctaText: 'Explore Our Solutions',
  ctaHref: '/#solutions',
} as const;

export const SOLUTIONS_SECTION = {
  title: 'Who We Help',
  solutionCards: [
    {
      title: 'C-Stores & Retailers',
      description: 'Boost in-store sales, automate inventory, and build customer loyalty with AI-powered tools designed for retail environments.',
      href: '/solutions/c-stores',
    },
    {
      title: 'Online & Service Businesses',
      description: 'Scale your expertise, automate your lead flow, and streamline client management to grow your business without the burnout.',
      href: '/solutions/online-businesses',
    },
  ],
};

export const BUSINESS_SOLUTIONS = [
  {
    id: 'c-stores',
    title: 'C-Store Solutions',
    description: 'AI-powered solutions for convenience stores',
    href: '/solutions/c-stores',
  },
  {
    id: 'online-businesses',
    title: 'Online Businesses',
    description: 'Digital solutions for online businesses',
    href: '/solutions/online-businesses',
  },
] as const;

export const PROCESS_SECTION = {
  title: 'Our Process',
  subtitle: 'A proven methodology for business transformation',
  steps: [
    {
      number: '01',
      title: 'Foundation & Automation',
      description: 'We begin by digitizing your core processes to create a solid data foundation that powers everything else.',
      icon: '🏗️',
    },
    {
      number: '02',
      title: 'AI-Powered Growth',
      description: 'We leverage that foundation to implement AI tools for sales, marketing, and customer intelligence.',
      icon: '🤖',
    },
    {
      number: '03',
      title: 'Strategic Transformation',
      description: 'We develop custom AI solutions for your unique challenges to create a competitive advantage.',
      icon: '🚀',
    },
  ],
} as const;

export const SOCIAL_PROOF_SECTION = {
  title: 'What Our Clients Say',
  subtitle: 'Hear from businesses we\'ve helped transform',
  testimonials: [
    {
      id: 1,
      quote: "Jaithraya transformed our retail operations with AI. Our sales increased by 40% in just 3 months.",
      author: "Sarah Johnson",
      company: "Metro Convenience Stores",
      role: "CEO",
      avatar: "SJ",
      initials: "SJ",
    },
    {
      id: 2,
      quote: "The custom AI solution they built for our online business has been a game-changer. Highly recommended!",
      author: "Michael Chen",
      company: "TechStart Solutions",
      role: "Founder",
      avatar: "MC",
      initials: "MC",
    },
    {
      id: 3,
      quote: "Professional, innovative, and results-driven. They delivered exactly what they promised.",
      author: "Emily Rodriguez",
      company: "Growth Marketing Co",
      role: "Marketing Director",
      avatar: "ER",
      initials: "ER",
    },
  ],
  // Client logos - placeholder data until we have actual clients
  clientLogos: [
    { name: "Metro Convenience", placeholder: "MC" },
    { name: "TechStart Solutions", placeholder: "TS" },
    { name: "Growth Marketing Co", placeholder: "GM" },
    { name: "Retail Plus", placeholder: "RP" },
    { name: "Digital Ventures", placeholder: "DV" },
    { name: "Smart Business", placeholder: "SB" },
  ],
} as const;

export const TECHNOLOGY_SECTION = {
  title: 'Our Expertise',
  subtitle: 'Built with cutting-edge technology',
  categories: [
    {
      title: 'Development',
      technologies: [
        { name: 'Next.js', description: 'React Framework' },
        { name: 'Vercel', description: 'Deployment Platform' },
        { name: 'Node.js', description: 'Backend Runtime' },
      ],
    },
    {
      title: 'AI & Data',
      technologies: [
        { name: 'OpenAI', description: 'AI Models' },
        { name: 'Gemini', description: 'Google AI' },
        { name: 'AWS', description: 'Cloud Services' },
        { name: 'Google Cloud', description: 'Cloud Platform' },
      ],
    },
    {
      title: 'Business Tools',
      technologies: [
        { name: 'HubSpot', description: 'CRM Platform' },
        { name: 'Shopify', description: 'E-commerce' },
        { name: 'Zapier', description: 'Automation' },
      ],
    },
  ],
} as const;

export const FINAL_CTA_SECTION = {
  title: 'Ready to Transform Your Business?',
  subtitle: 'Join the businesses that have already discovered the power of AI-driven growth. Let\'s build something amazing together.',
  ctaText: 'Schedule a Free Consultation',
  ctaHref: '/contact',
  features: [
    'Free 30-minute consultation',
    'Custom AI strategy assessment',
    'No commitment required',
  ],
} as const;
