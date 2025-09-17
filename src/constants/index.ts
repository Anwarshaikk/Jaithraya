// Application constants

export const APP_CONFIG = {
  name: 'Jaithraya',
  tagline: 'AI-Powered Business Solutions',
  description: 'Transform Your Business with AI',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Our Process', href: '/#process' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact', isButton: true },
] as const;

export const HERO_SECTION = {
  title: 'Transform Your Business with AI',
  subtitle: 'Professional websites, smart automation, and AI-powered growth strategies.',
  valueProposition: 'From local service businesses to retail stores - we help you compete and win in the digital age.',
  ctaText: 'Get Your Free Consultation',
  ctaHref: '/contact',
} as const;

export const SOLUTIONS_SECTION = {
  title: 'Complete Business Solutions',
  solutionCards: [
    {
      title: 'Professional Websites',
      description: 'Modern, mobile-first websites that convert visitors into customers. Perfect for service businesses, retail stores, and local companies.',
      href: '/solutions/websites',
      features: ['Mobile-optimized design', 'SEO-ready', 'Fast loading', 'Easy to manage'],
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations with AI-powered tools for inventory, customer management, and marketing automation.',
      href: '/solutions/automation',
      features: ['Inventory management', 'Customer loyalty programs', 'Automated marketing', 'Sales reporting'],
    },
    {
      title: 'AI-Powered Growth',
      description: 'Custom AI solutions that analyze your data to predict trends, optimize pricing, and drive revenue growth.',
      href: '/solutions/ai-growth',
      features: ['Predictive analytics', 'Smart recommendations', 'Customer insights', 'Revenue optimization'],
    },
  ],
};

export const BUSINESS_SOLUTIONS = [
  {
    id: 'websites',
    title: 'Professional Websites',
    description: 'Modern websites that convert',
    href: '/solutions/websites',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Streamline your operations',
    href: '/solutions/automation',
  },
  {
    id: 'ai-growth',
    title: 'AI-Powered Growth',
    description: 'Data-driven business growth',
    href: '/solutions/ai-growth',
  },
] as const;

export const PROCESS_SECTION = {
  title: 'How We Transform Your Business',
  subtitle: 'A proven 3-step process that delivers results',
  steps: [
    {
      number: '01',
      title: 'Digital Foundation',
      description: 'We start by building your professional online presence with a modern website and essential digital tools.',
      icon: '🌐',
    },
    {
      number: '02',
      title: 'Smart Automation',
      description: 'We automate your repetitive tasks and implement AI-powered tools to save you time and increase efficiency.',
      icon: '⚡',
    },
    {
      number: '03',
      title: 'Growth & Intelligence',
      description: 'We use your data to create custom AI solutions that predict trends and drive sustainable growth.',
      icon: '🚀',
    },
  ],
} as const;

export const SOCIAL_PROOF_SECTION = {
  title: 'Success Stories',
  subtitle: 'Real results from real businesses',
  testimonials: [
    {
      id: 1,
      quote: "Our new website increased online bookings by 300% in just 2 months. Jaithraya delivered exactly what we needed.",
      author: "Maria Santos",
      company: "Elite Cleaning Services",
      role: "Owner",
      avatar: "MS",
      initials: "MS",
    },
    {
      id: 2,
      quote: "The AI inventory system they built for our convenience store increased our profit margins by 25%.",
      author: "David Kim",
      company: "QuickMart Stores",
      role: "Manager",
      avatar: "DK",
      initials: "DK",
    },
    {
      id: 3,
      quote: "Professional, fast, and results-driven. They transformed our business operations completely.",
      author: "Lisa Johnson",
      company: "Johnson Consulting",
      role: "Founder",
      avatar: "LJ",
      initials: "LJ",
    },
  ],
  // Client logos - placeholder data until we have actual clients
  clientLogos: [
    { name: "Elite Cleaning", placeholder: "EC" },
    { name: "QuickMart Stores", placeholder: "QM" },
    { name: "Johnson Consulting", placeholder: "JC" },
    { name: "Metro Services", placeholder: "MS" },
    { name: "Digital Solutions", placeholder: "DS" },
    { name: "Smart Business", placeholder: "SB" },
  ],
} as const;

export const TECHNOLOGY_SECTION = {
  title: 'Built with Modern Technology',
  subtitle: 'Enterprise-grade tools for reliable performance',
  categories: [
    {
      title: 'Web Development',
      technologies: [
        { name: 'Next.js', description: 'React Framework' },
        { name: 'Vercel', description: 'Deployment Platform' },
        { name: 'TypeScript', description: 'Type Safety' },
      ],
    },
    {
      title: 'AI & Analytics',
      technologies: [
        { name: 'OpenAI', description: 'AI Models' },
        { name: 'Google AI', description: 'Machine Learning' },
        { name: 'AWS', description: 'Cloud Services', isHighlighted: true },
      ],
    },
    {
      title: 'Business Tools',
      technologies: [
        { name: 'HubSpot', description: 'CRM Platform' },
        { name: 'Zapier', description: 'Automation' },
        { name: 'Google Analytics', description: 'Analytics' },
      ],
    },
  ],
} as const;

export const FINAL_CTA_SECTION = {
  title: 'Ready to Transform Your Business?',
  subtitle: 'Join hundreds of businesses that have already discovered the power of AI-driven growth. Let\'s build something amazing together.',
  ctaText: 'Get Your Free Consultation',
  ctaHref: '/contact',
  features: [
    'Free 30-minute consultation',
    'Custom business assessment',
    'No commitment required',
  ],
} as const;

// New pricing structure
export const PRICING_SECTION = {
  title: 'Simple, Transparent Pricing',
  subtitle: 'Choose the package that fits your business needs',
  packages: [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for new businesses',
      features: [
        'Professional website',
        'Mobile optimization',
        'Basic SEO setup',
        'Contact forms',
        '30-day support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: '$7,500',
      description: 'Most popular for growing businesses',
      features: [
        'Everything in Starter',
        'Business automation tools',
        'Customer management system',
        'Marketing automation',
        '90-day support',
        'Monthly reporting',
      ],
      cta: 'Choose Growth',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For businesses ready to scale',
      features: [
        'Everything in Growth',
        'Custom AI solutions',
        'Advanced analytics',
        'Dedicated support',
        'Quarterly strategy reviews',
        'Priority development',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ],
} as const;
