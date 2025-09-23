export type ShowcaseCategory = 'Website' | 'Dashboard' | 'Automation' | 'Chatbot' | 'Integration';
export type Industry = 'Retail & C-store' | 'Food & Hospitality' | 'Cleaning Services' | 'Professional Services' | 'Smoke Shop' | 'Other';

export type KPI = { label: string; value: string };
export type Media = { type: 'image' | 'video' | 'iframe'; src: string; alt?: string; };
export type ShowcaseItem = {
  slug: string;
  title: string;
  subtitle?: string;
  category: ShowcaseCategory;
  industry: Industry;
  summary: string;
  highlights: string[];              // bullet points
  kpis?: KPI[];                      // chips like +25% bookings
  features: string[];                // what's included
  media: Media[];                    // gallery
  techStack?: string[];
  demo?: { url?: string; creds?: { user?: string; pass?: string } };
  tags: string[];
  published: boolean;
};

export const SHOWCASE_ITEMS: ReadonlyArray<ShowcaseItem> = [
  {
    slug: 'retail-dashboard',
    title: 'Retail & E-commerce Dashboard',
    subtitle: 'Complete inventory and sales analytics platform',
    category: 'Dashboard',
    industry: 'Retail & C-store',
    summary: 'A comprehensive dashboard that transforms raw POS data into actionable insights, helping retail businesses optimize inventory, reduce waste, and increase profitability.',
    highlights: [
      'SKU-level sales heatmap with real-time updates',
      'Dead stock detector with automated alerts',
      'Auto reorder thresholds based on sales velocity',
      'Multi-location inventory synchronization',
      'Customer behavior analytics and segmentation'
    ],
    kpis: [
      { label: 'Weekly Sell-through', value: '+22%' },
      { label: 'Stockouts Reduced', value: '-18%' },
      { label: 'Inventory Turnover', value: '+35%' },
      { label: 'Waste Reduction', value: '-28%' }
    ],
    features: [
      'Stripe/Square payment integration',
      'Daily WhatsApp summary reports',
      'Cost of goods tracking',
      'Seasonal demand forecasting',
      'Multi-currency support',
      'Custom KPI dashboards'
    ],
    media: [
      { type: 'image', src: '/images/showcase/retail-dashboard-1.svg', alt: 'Retail dashboard main view' },
      { type: 'image', src: '/images/showcase/retail-dashboard-2.svg', alt: 'Inventory analytics view' },
      { type: 'iframe', src: '/demos/retail-dashboard', alt: 'Interactive retail dashboard demo' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Chart.js'],
    demo: {
      url: '/demos/retail-dashboard',
      creds: { user: 'demo@jaithraya.com', pass: 'demo123' }
    },
    tags: ['analytics', 'inventory', 'payments', 'dashboard', 'retail'],
    published: true
  },
  {
    slug: 'cleaning-services-booking',
    title: 'Cleaning Services Booking Website',
    subtitle: 'Streamlined booking platform with automated scheduling',
    category: 'Website',
    industry: 'Cleaning Services',
    summary: 'A modern booking website that simplifies the customer journey from discovery to service completion, with automated scheduling and payment processing.',
    highlights: [
      'Zip-code based pricing calculator',
      'SMS reminders and confirmations',
      'Google Reviews integration widget',
      'Real-time availability calendar',
      'Automated follow-up sequences'
    ],
    kpis: [
      { label: 'Conversion Rate', value: '2.1×' },
      { label: 'No-shows Reduced', value: '-35%' },
      { label: 'Booking Time', value: '-60%' },
      { label: 'Customer Satisfaction', value: '4.8/5' }
    ],
    features: [
      'Online payment processing',
      'Service area mapping',
      'Customer portal access',
      'Staff scheduling integration',
      'Review management system',
      'Mobile-responsive design'
    ],
    media: [
      { type: 'image', src: '/images/showcase/cleaning-website-landing.svg', alt: 'Cleaning services landing page' },
      { type: 'image', src: '/images/showcase/cleaning-booking-flow.svg', alt: 'Booking flow interface' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'Twilio', 'Google Maps API'],
    demo: {
      url: 'https://demo-cleaning.jaithraya.com'
    },
    tags: ['booking', 'scheduling', 'payments', 'sms', 'reviews'],
    published: true
  },
  {
    slug: 'restaurant-online-ordering',
    title: 'Restaurant Online Ordering System',
    subtitle: 'Complete digital ordering solution with kitchen integration',
    category: 'Website',
    industry: 'Food & Hospitality',
    summary: 'A comprehensive online ordering platform that seamlessly integrates with restaurant operations, from menu management to kitchen display systems.',
    highlights: [
      'Real-time menu synchronization',
      'Order throttling during peak hours',
      'Kitchen display system integration',
      'Multi-location order management',
      'Customer loyalty program integration'
    ],
    kpis: [
      { label: 'Average Order Value', value: '+29%' },
      { label: 'Order Processing Time', value: '-45%' },
      { label: 'Customer Retention', value: '+18%' },
      { label: 'Peak Hour Efficiency', value: '+32%' }
    ],
    features: [
      'Dynamic menu management',
      'Order customization options',
      'Delivery tracking system',
      'Staff management tools',
      'Analytics and reporting',
      'Mobile app integration'
    ],
    media: [
      { type: 'image', src: '/images/showcase/restaurant-online-ordering.svg', alt: 'Restaurant ordering interface' },
      { type: 'image', src: '/images/showcase/restaurant-kds.svg', alt: 'Kitchen display system' }
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    demo: {
      url: 'https://demo-restaurant.jaithraya.com'
    },
    tags: ['ordering', 'menu', 'kitchen', 'delivery', 'analytics'],
    published: true
  },
  {
    slug: 'professional-services-crm',
    title: 'Professional Services CRM & Billing',
    subtitle: 'Complete client management and billing automation',
    category: 'Dashboard',
    industry: 'Professional Services',
    summary: 'A specialized CRM system designed for professional services firms, featuring pipeline management, automated billing, and client communication tools.',
    highlights: [
      'Visual pipeline board with drag-and-drop',
      'Automated invoice generation and tracking',
      'Integrated payment processing',
      'Workload planning and resource allocation',
      'Client portal with project visibility'
    ],
    kpis: [
      { label: 'Billable Utilization', value: '+15%' },
      { label: 'Invoice Processing Time', value: '-70%' },
      { label: 'Client Satisfaction', value: '+22%' },
      { label: 'Revenue per Client', value: '+28%' }
    ],
    features: [
      'Project time tracking',
      'Automated billing cycles',
      'Client communication templates',
      'Document management system',
      'Team collaboration tools',
      'Financial reporting suite'
    ],
    media: [
      { type: 'image', src: '/images/showcase/pro-services-crm.svg', alt: 'Professional services CRM dashboard' }
    ],
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'AWS'],
    demo: {
      url: '/demos/professional-crm',
      creds: { user: 'demo@jaithraya.com', pass: 'demo123' }
    },
    tags: ['crm', 'billing', 'pipeline', 'automation', 'professional'],
    published: true
  },
  {
    slug: 'pos-data-warehouse-automation',
    title: 'POS → Data Warehouse Automation',
    subtitle: 'Automated data pipeline for business intelligence',
    category: 'Automation',
    industry: 'Retail & C-store',
    summary: 'An automated ETL pipeline that transforms POS data into actionable business intelligence, providing real-time insights and automated reporting.',
    highlights: [
      'Nightly ETL data processing',
      'Automated data quality checks',
      'Looker Studio template integration',
      'Real-time alert system',
      'Multi-source data consolidation'
    ],
    kpis: [
      { label: 'Reporting Speed', value: 'T+1 (from T+7)' },
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Processing Time', value: '-85%' },
      { label: 'Manual Errors', value: '-95%' }
    ],
    features: [
      'Automated data validation',
      'Custom report generation',
      'API integrations',
      'Data visualization tools',
      'Scheduled report delivery',
      'Error handling and logging'
    ],
    media: [
      { type: 'image', src: '/images/showcase/pos-integration-automation.svg', alt: 'POS data automation pipeline' }
    ],
    techStack: ['Python', 'Apache Airflow', 'PostgreSQL', 'Looker Studio', 'AWS'],
    demo: {
      url: '/demos/pos-automation'
    },
    tags: ['automation', 'etl', 'analytics', 'reporting', 'integration'],
    published: true
  },
  {
    slug: 'smoke-shop-inventory-management',
    title: 'Smoke Shop Inventory Management',
    subtitle: 'Specialized inventory system for tobacco and vape products',
    category: 'Dashboard',
    industry: 'Smoke Shop',
    summary: 'A specialized inventory management system designed for smoke shops, handling age verification, compliance tracking, and specialized product categories.',
    highlights: [
      'Age verification integration',
      'Compliance tracking and reporting',
      'Specialized product categorization',
      'Tax calculation automation',
      'Supplier management system'
    ],
    kpis: [
      { label: 'Compliance Score', value: '100%' },
      { label: 'Inventory Accuracy', value: '+25%' },
      { label: 'Tax Processing Time', value: '-80%' },
      { label: 'Audit Preparation', value: '-90%' }
    ],
    features: [
      'Age verification system',
      'Compliance reporting',
      'Tax calculation engine',
      'Supplier portal',
      'Product lifecycle tracking',
      'Regulatory updates'
    ],
    media: [
      { type: 'image', src: '/images/showcase/smoke-shop-inventory.svg', alt: 'Smoke shop inventory dashboard' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Compliance APIs'],
    demo: {
      url: '/demos/smoke-shop-inventory'
    },
    tags: ['inventory', 'compliance', 'tax', 'verification', 'specialized'],
    published: true
  },
  {
    slug: 'ai-customer-service-chatbot',
    title: 'AI Customer Service Chatbot',
    subtitle: 'Intelligent chatbot with industry-specific knowledge',
    category: 'Chatbot',
    industry: 'Other',
    summary: 'An AI-powered chatbot that provides 24/7 customer support with industry-specific knowledge, handling common queries and escalating complex issues.',
    highlights: [
      'Natural language processing',
      'Industry-specific knowledge base',
      'Seamless human handoff',
      'Multi-language support',
      'Learning and improvement system'
    ],
    kpis: [
      { label: 'Response Time', value: '<2s' },
      { label: 'Resolution Rate', value: '78%' },
      { label: 'Customer Satisfaction', value: '4.6/5' },
      { label: 'Cost Reduction', value: '-45%' }
    ],
    features: [
      'Conversation flow management',
      'Sentiment analysis',
      'Integration with CRM systems',
      'Analytics and reporting',
      'Custom training capabilities',
      'Voice and text support'
    ],
    media: [
      { type: 'image', src: '/images/showcase/ai-chatbot-interface.svg', alt: 'AI chatbot interface' }
    ],
    techStack: ['OpenAI GPT', 'Node.js', 'WebSocket', 'MongoDB', 'Redis'],
    demo: {
      url: '/demos/ai-chatbot'
    },
    tags: ['ai', 'chatbot', 'automation', 'customer-service', 'nlp'],
    published: true
  },
  {
    slug: 'multi-platform-integration',
    title: 'Multi-Platform Integration Hub',
    subtitle: 'Unified data and workflow management across platforms',
    category: 'Integration',
    industry: 'Other',
    summary: 'A comprehensive integration platform that connects various business tools and systems, providing a unified view and automated workflows.',
    highlights: [
      '100+ platform integrations',
      'Custom workflow automation',
      'Real-time data synchronization',
      'Error handling and retry logic',
      'Custom API development'
    ],
    kpis: [
      { label: 'Integration Success Rate', value: '99.5%' },
      { label: 'Data Sync Speed', value: '<30s' },
      { label: 'Manual Work Reduction', value: '-75%' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    features: [
      'Pre-built connectors',
      'Custom API development',
      'Workflow automation',
      'Data transformation tools',
      'Monitoring and alerting',
      'Scalable infrastructure'
    ],
    media: [
      { type: 'image', src: '/images/showcase/integration-hub.svg', alt: 'Integration hub dashboard' }
    ],
    techStack: ['Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    demo: {
      url: '/demos/integration-hub'
    },
    tags: ['integration', 'automation', 'api', 'workflow', 'scalable'],
    published: true
  }
] as const;

// Helper functions to derive categories, industries, and tags
export const allCategories = Array.from(new Set(SHOWCASE_ITEMS.map(item => item.category))) as ShowcaseCategory[];
export const allIndustries = Array.from(new Set(SHOWCASE_ITEMS.map(item => item.industry))) as Industry[];
export const allTags = Array.from(new Set(SHOWCASE_ITEMS.flatMap(item => item.tags))).sort();

// Helper function to get items by category
export const getItemsByCategory = (category: ShowcaseCategory) => 
  SHOWCASE_ITEMS.filter(item => item.category === category);

// Helper function to get items by industry
export const getItemsByIndustry = (industry: Industry) => 
  SHOWCASE_ITEMS.filter(item => item.industry === industry);

// Helper function to get items by tags
export const getItemsByTags = (tags: string[]) => 
  SHOWCASE_ITEMS.filter(item => tags.some(tag => item.tags.includes(tag)));

// Helper function to search items
export const searchItems = (query: string) => 
  SHOWCASE_ITEMS.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.summary.toLowerCase().includes(query.toLowerCase()) ||
    item.highlights.some(highlight => highlight.toLowerCase().includes(query.toLowerCase())) ||
    item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

// Helper function to get item by slug
export const getItemBySlug = (slug: string) => 
  SHOWCASE_ITEMS.find(item => item.slug === slug);

// Helper function to get related items
export const getRelatedItems = (currentItem: ShowcaseItem, limit: number = 3) => 
  SHOWCASE_ITEMS
    .filter(item => 
      item.slug !== currentItem.slug && 
      (item.category === currentItem.category || 
       item.industry === currentItem.industry ||
       item.tags.some(tag => currentItem.tags.includes(tag)))
    )
    .slice(0, limit);
