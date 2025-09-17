// Application constants

export const APP_CONFIG = {
  name: 'Jaithraya',
  tagline: 'AI-Powered Business Solutions',
  description: 'Transform Your Business with AI',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'About', href: '/#about' },
  { label: 'Our Process', href: '/#process' },
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

export const ABOUT_SECTION = {
  hero: {
    title: 'Meet Anwar - The Data Scientist Behind Jaithraya',
    subtitle: 'From University of New Haven to transforming businesses worldwide with AI',
  },
  brandStory: {
    title: 'Why Jaithraya?',
    subtitle: 'The Meaning Behind Our Name',
    content: 'Jaithraya is an AI-driven solutions company dedicated to helping small and medium-sized businesses thrive through intelligent automation and data-driven insight. Our name comes from the Sanskrit word Jaithraya, meaning "threefold victory"—body, mind, and spirit—reflecting our belief that true success balances technology, people, and purpose.',
    description: 'We partner with convenience stores, smoke shops, restaurants, cleaning services, and other service-oriented companies to streamline operations and unlock new opportunities. From AI integration and business-process optimization to scalable cloud infrastructure, we deliver automation that reduces manual work, surfaces actionable insights, and drives measurable growth.',
    philosophy: 'Rooted in innovation, cultural respect, and genuine client partnership, Jaithraya builds solutions that honor tradition while embracing the future. Whether you\'re looking to automate everyday tasks, gain real-time analytics, or modernize your technology stack, our team is ready to guide you toward lasting transformation.',
  },
  founder: {
    title: 'Meet Anwar - The Visionary Behind Jaithraya',
    subtitle: 'My Journey: Infosys → Masters → AI Startup',
    story: 'After gaining valuable corporate experience as a Systems Engineer at Infosys, I pursued my Masters in Data Science from University of New Haven to deepen my AI expertise. During my studies, I realized how AI could transform small businesses—the same way it had revolutionized large corporations.',
    location: 'Based in West Haven, CT, I serve clients globally, combining corporate experience, academic knowledge, and entrepreneurial spirit to help businesses achieve their threefold victory.',
    values: [
      {
        title: 'Integrity',
        description: 'I deliver exactly what I promise, when I promise it'
      },
      {
        title: 'Innovation', 
        description: 'I constantly explore new ways to solve business problems with AI'
      },
      {
        title: 'Client Growth',
        description: 'Your success is my success - I measure my worth by your results'
      }
    ],
    quote: 'AI made problem-solving easy for me, and I want to make it easy for you too. I started Jaithraya to bridge the gap between corporate AI and small business needs, helping every business achieve victory across all three dimensions of success.',
    quoteAuthor: 'Anwar Rashid Shaik, Founder & CEO'
  },
  approach: {
    title: 'Our Threefold Victory Approach',
    subtitle: 'Just as our name suggests victory across three realms, we help businesses win in three key areas:',
    tiers: [
      {
        icon: '🌐',
        title: 'Digital Foundation',
        description: 'We start by building your professional online presence with modern websites and essential digital tools.'
      },
      {
        icon: '⚡',
        title: 'Smart Automation',
        description: 'We automate your repetitive tasks and implement AI-powered tools to save you time and increase efficiency.'
      },
      {
        icon: '🚀',
        title: 'Growth & Intelligence',
        description: 'We use your data to create custom AI solutions that predict trends and drive sustainable growth.'
      }
    ]
  },
  contact: {
    title: 'Ready to Achieve Your Threefold Victory?',
    subtitle: 'Discover how Jaithraya can help your business achieve its own threefold victory—connect with us today to explore the possibilities.',
    details: {
      phone: '203-710-0790',
      email: 'anwarrashidshaik@jaithraya.com',
      location: 'West Haven, CT (Serving Globally)'
    },
    cta: {
      text: 'Schedule Your Free Consultation',
      description: 'Free 30-minute consultation • Custom business assessment • No commitment required',
      href: '/contact'
    }
  }
} as const;