import {
  ServiceItem,
  IndustryItem,
  EcosystemMember,
  WhyChooseItem,
  ProcessStep,
  ComparisonPoint,
} from '@/types';

export const HERO_CONTENT = {
  badge: 'YOUR COMPLETE BUSINESS OUTSOURCING PARTNER',
  headline: 'Build Your Business.',
  headlineHighlight: "We'll Handle Everything Else.",
  description:
    'Growing a business is hard. Managing technology, marketing, legal work, hiring, branding, operations, and content shouldn’t be.',
  extendedDescription:
    'At Svayam Incarnation, we become an extension of your business by providing end-to-end outsourcing solutions that help companies launch faster, scale efficiently, and grow with confidence.',
  audienceScope:
    'Whether you’re a startup, SME, or enterprise, our experts work alongside your team to deliver solutions that create measurable business impact.',
  tagline: 'Building · Growing · Scaling Businesses Together',
  stats: [
    { label: 'Years of Excellence', value: '12+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Enterprise Clients', value: '200+' },
    { label: 'Countries Served', value: '50+' },
  ],
};

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    id: 'c1',
    vendorPain: 'Explaining your vision five different times to disjointed vendors...',
    svayamGain: 'You explain it once to an aligned, dedicated multidisciplinary team.',
    iconName: 'MessageSquareShare',
  },
  {
    id: 'c2',
    vendorPain: 'Coordinating multiple freelancers and mismatched agency timelines...',
    svayamGain: 'You collaborate with one synchronized team sharing the same vision.',
    iconName: 'GitMerge',
  },
  {
    id: 'c3',
    vendorPain: 'Chasing status updates and managing finger-pointing between contractors...',
    svayamGain: 'You receive proactive, transparent communication and clear milestones.',
    iconName: 'Activity',
  },
  {
    id: 'c4',
    vendorPain: 'Solving daily operational friction and repetitive administrative bottlenecks...',
    svayamGain: 'You stay focused on high-level strategy and revenue growth.',
    iconName: 'Target',
  },
];

export const FRUSTRATION_PAIRS = [
  {
    left: 'Your website is still under development.',
    right: 'Your marketing campaign is waiting.',
  },
  {
    left: 'Your designer needs content.',
    right: 'Your content writer needs product information.',
  },
  {
    left: 'Your legal consultant is waiting for documentation.',
    right: 'Your developer needs design approval.',
  },
];

export const VALUE_PILLARS = [
  {
    title: 'We ask questions before writing code.',
    description: 'We dig deep into user workflows and business objectives to architect software that solves real problems.',
    iconName: 'Code2',
  },
  {
    title: 'We understand your customers before launching campaigns.',
    description: 'Data-informed messaging and high-converting creative strategies that reach the right people at the right time.',
    iconName: 'Users',
  },
  {
    title: 'We learn your business before suggesting solutions.',
    description: 'No generic formulas. We craft bespoke systems that integrate seamlessly with your existing team.',
    iconName: 'Sparkles',
  },
];

export const CORE_TRIAD = [
  {
    title: 'One Experienced Team',
    subtitle: 'Senior specialists across tech, design, marketing, legal, and growth.',
  },
  {
    title: 'One Aligned Team',
    subtitle: 'Cross-functional collaboration with zero communication silos.',
  },
  {
    title: 'One Shared Goal',
    subtitle: 'Driving measurable, sustainable revenue and operational growth.',
  },
];

export const ECOSYSTEM_MEMBERS: EcosystemMember[] = [
  {
    id: 'tech',
    title: 'Technology Experts',
    role: 'Engineering & Architecture',
    specialty: 'Full-stack software, mobile apps & scalable SaaS infrastructure',
    iconName: 'Cpu',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'marketing',
    title: 'Digital Marketers',
    role: 'Growth & Performance',
    specialty: 'SEO, Google & Meta Ads, LinkedIn demand gen & conversion funnels',
    iconName: 'TrendingUp',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    id: 'design',
    title: 'Creative Designers',
    role: 'UI/UX & Brand Identity',
    specialty: 'Design systems, intuitive interfaces & high-impact visual language',
    iconName: 'Palette',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'content',
    title: 'Content Specialists',
    role: 'Storytelling & Media',
    specialty: 'High-converting copy, motion graphics & corporate narratives',
    iconName: 'Feather',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'consulting',
    title: 'Business Consultants',
    role: 'Strategy & Advisory',
    specialty: 'Digital transformation, unit economics & operational optimization',
    iconName: 'Compass',
    color: 'from-sky-500 to-blue-700',
  },
  {
    id: 'legal',
    title: 'Legal Professionals',
    role: 'Compliance & Protection',
    specialty: 'Business registration, contract drafting, IP & regulatory advisory',
    iconName: 'ShieldCheck',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'pm',
    title: 'Project Managers',
    role: 'Execution & Delivery',
    specialty: 'Agile sprint delivery, timeline tracking & cross-team synergy',
    iconName: 'Kanban',
    color: 'from-indigo-500 to-violet-700',
  },
  {
    id: 'ai',
    title: 'AI Specialists',
    role: 'Automation & Intelligence',
    specialty: 'Custom LLM agents, workflow automation & predictive insights',
    iconName: 'Bot',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'cloud',
    title: 'Cloud Engineers',
    role: 'DevOps & Reliability',
    specialty: 'AWS/GCP architectures, CI/CD pipelines & resilient security',
    iconName: 'Cloud',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'product',
    title: 'Product Strategists',
    role: 'Roadmap & PMF',
    specialty: 'User journey mapping, feature prioritization & MVP launches',
    iconName: 'Layers',
    color: 'from-violet-500 to-purple-700',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'tech-solutions',
    title: 'Technology Solutions',
    subtitle: 'Build Technology That Moves Your Business Forward',
    description:
      'We build technology that solves real problems, improves customer experiences, and creates measurable business value.',
    iconName: 'Laptop',
    idealFor: 'Startups · SMEs · Enterprises · Healthcare · Education',
    badge: 'Core Capability',
    gradient: 'from-blue-600 to-indigo-600',
    features: [
      'Custom Software Development & Architecture',
      'Web & Cross-Platform Mobile Applications (iOS / Android)',
      'SaaS Platforms & AI-Powered Next-Gen Apps',
      'Cloud Infrastructure, DevOps & Kubernetes Automation',
      'UI/UX Design Systems & Product Engineering',
      'Quality Assurance, Automated Testing & 24/7 Maintenance',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Great Products Deserve Great Visibility',
    description:
      'We focus on meaningful growth that supports your business objectives — not vanity metrics.',
    iconName: 'Megaphone',
    idealFor: 'B2B & B2C Brands · E-Commerce · Tech Platforms',
    badge: 'High Impact',
    gradient: 'from-teal-600 to-cyan-600',
    features: [
      'SEO & High-Intent Performance Marketing',
      'Google Ads, Meta & Multi-Channel Paid Campaigns',
      'Social Media & Executive LinkedIn Marketing',
      'Email Marketing Journeys & Lifecycle Automation',
      'B2B Lead Generation & Full-Funnel Analytics',
      'Conversion Rate Optimization (CRO) & A/B Testing',
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    subtitle: 'Every Brand Has a Story. Let’s Tell Yours Beautifully.',
    description:
      'Content that communicates clearly, builds trust, and inspires action across every format and platform.',
    iconName: 'PenTool',
    idealFor: 'Growing Brands · Educational Platforms · Media Outlets',
    badge: 'Creative Engine',
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'High-Resolution Graphic Design & Motion Graphics',
      'Corporate Video Editing, Reels & Studio Photography',
      'Engaging Social Media Creatives & Visual Assets',
      'Website Copywriting, Technical Articles & Case Studies',
      'Brand Storytelling & Strategic Executive Narratives',
      'Pitch Decks, Sales Collateral & Corporate Presentations',
    ],
  },
  {
    id: 'branding-design',
    title: 'Branding & Creative Design',
    subtitle: 'Build a Brand People Remember',
    description:
      'We help businesses create brands that feel professional, trustworthy, and memorable across every touchpoint.',
    iconName: 'Sparkles',
    idealFor: 'New Ventures · Rebranding Companies · Consumer Goods',
    badge: 'Brand Authority',
    gradient: 'from-amber-500 to-rose-600',
    features: [
      'Comprehensive Brand Identity & Iconic Logo Design',
      'Visual Language, Typography & Style Guidelines',
      'Product Packaging, Print & Campaign Design',
      'Corporate Branding & Digital Design Systems',
      'Creative Direction & Omnichannel Brand Positioning',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    subtitle: 'Let Technology Handle the Repetitive Work',
    description:
      'AI and automation allow teams to work faster, make better decisions, and improve experiences without increasing overhead.',
    iconName: 'Bot',
    idealFor: 'Operations-Heavy Businesses · Support Teams · High-Growth Startups',
    badge: 'Future Ready',
    gradient: 'from-cyan-600 to-blue-700',
    features: [
      'AI Integration & Custom LLM Agent Deployments',
      'End-to-End Business & Workflow Automation',
      'Intelligent AI Chatbots & CRM System Sync',
      'Data Analytics & Real-Time Business Intelligence',
      'AI-Powered Content Assistance & Document Extraction',
    ],
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    subtitle: 'Better Decisions Build Better Businesses',
    description:
      'We help founders and leaders make informed decisions that reduce risk and create sustainable growth opportunities.',
    iconName: 'BarChart3',
    idealFor: 'Founders · Executive Teams · Expanding Organizations',
    badge: 'Strategic Advisory',
    gradient: 'from-indigo-600 to-slate-800',
    features: [
      'Business Strategy, Unit Economics & Advisory',
      'Holistic Digital Transformation Roadmaps',
      'Product Strategy & Go-To-Market Growth Planning',
      'Technology Stack Evaluation & Architecture Audits',
      'Operational Improvement & International Market Expansion',
    ],
  },
  {
    id: 'legal-support',
    title: 'Legal & Business Support',
    subtitle: 'Build With Confidence. Grow Without Uncertainty.',
    description:
      'We simplify complex legal and corporate processes so businesses can focus on growth instead of paperwork.',
    iconName: 'FileCheck2',
    idealFor: 'Incorporations · Scaling Startups · Regulated Industries',
    badge: 'Compliance Shield',
    gradient: 'from-emerald-600 to-teal-800',
    features: [
      'Business Registration & Corporate Compliance',
      'Legal Documentation, MSA, NDA & Vendor Contracts',
      'Trademark, Copyright & Intellectual Property Guidance',
      'Regulatory Compliance Assistance & Filings',
      'Corporate Governance & Board Documentation',
    ],
  },
  {
    id: 'dedicated-teams',
    title: 'Dedicated Teams',
    subtitle: 'Build Your Dream Team Without Hiring One',
    description:
      'Access vetted, senior professionals who work as a seamless extension of your business — one expert or a full pod.',
    iconName: 'UserCheck',
    idealFor: 'Fast-Paced Engineering Teams · Resource-Constrained Startups',
    badge: 'Staff Augmentation',
    gradient: 'from-blue-700 to-indigo-900',
    features: [
      'Dedicated Full-Stack Software & Mobile Developers',
      'Product Designers (UI/UX) & QA Engineers',
      'Growth Marketers & Performance Content Writers',
      'Technical Project Managers & Scrum Masters',
      'Cloud DevOps Engineers & In-House Legal Advisors',
    ],
  },
  {
    id: 'education-skills',
    title: 'Education & Skill Development',
    subtitle: 'Learning That Creates Opportunities',
    description:
      'Through hands-on training and skill development initiatives, we help students, professionals, and teams stay prepared for the future.',
    iconName: 'GraduationCap',
    idealFor: 'Corporate Teams · Universities · Career Switchers',
    badge: 'Talent Incubator',
    gradient: 'from-violet-600 to-indigo-800',
    features: [
      'Corporate Upskilling & Modern Tech Workshops',
      'Hands-On Industry Bootcamps with Real-World Projects',
      'Founder Mentorship & Business Incubation Programs',
      'AI Tooling & Modern Automation Masterclasses',
      'Practical Learning Frameworks Grounded in Execution',
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'startups',
    name: 'Startups & Early-Stage',
    description: 'We help founders validate ideas, build MVPs, establish digital presence, and prepare for rapid scaling.',
    iconName: 'Rocket',
    badge: '0 to 1 Speed',
    solutions: ['Rapid MVP Development', 'Pitch Deck & Branding', 'Go-to-Market Strategy'],
  },
  {
    id: 'smes',
    name: 'Small & Medium Businesses',
    description: 'We simplify processes, improve operational efficiency, and create systems for sustainable scaling.',
    iconName: 'Building2',
    badge: 'Cost Efficiency',
    solutions: ['Process Automation', 'Digital Customer Channels', 'Performance Marketing'],
  },
  {
    id: 'enterprises',
    name: 'Enterprises & Corporations',
    description: 'Modernize legacy systems, boost productivity, and execute large-scale digital transformation securely.',
    iconName: 'Landmark',
    badge: 'Scalability & Trust',
    solutions: ['Enterprise Cloud Infrastructure', 'Custom Software Systems', 'Compliance Architecture'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & HealthTech',
    description: 'Patient portals, telemedicine platforms, and compliance-ready systems designed around care quality.',
    iconName: 'HeartPulse',
    badge: 'Secure & Compliant',
    solutions: ['Telehealth Platforms', 'HIPAA/Compliance Standards', 'Patient Journey Portals'],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    description: 'Interactive learning platforms, digital classrooms, and LMS solutions adapting institutions to modern learning.',
    iconName: 'GraduationCap',
    badge: 'Interactive Learning',
    solutions: ['Custom LMS Solutions', 'Student Engagement Funnels', 'Virtual Classroom Tools'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate & PropTech',
    description: 'Property platforms, CRM systems, virtual tours, and digital lead-generation engines for modern brokerages.',
    iconName: 'Home',
    badge: 'High Conversion',
    solutions: ['Property Listing Engines', 'Real Estate CRM Integrations', 'Visual Asset Production'],
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    description: 'Omnichannel stores, frictionless payment systems, customer retention programs, and performance marketing.',
    iconName: 'ShoppingBag',
    badge: 'Direct Revenue',
    solutions: ['High-Speed E-commerce', 'Payment Gateway Integration', 'Cart Recovery & Ads'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Logistics',
    description: 'Modernize legacy workflows, eliminate manual friction, and build data-driven operations for the future.',
    iconName: 'Factory',
    badge: 'Operational Excellence',
    solutions: ['Inventory & Order Tracking', 'Workflow Digitization', 'ERP & Dashboard Tools'],
  },
  {
    id: 'services',
    name: 'Professional Services',
    description: 'Helping consultancies, law firms, and financial advisors strengthen brand authority and streamline intake.',
    iconName: 'Briefcase',
    badge: 'Client Acquisition',
    solutions: ['Authority Web Presence', 'Client Intake Automation', 'Document Management'],
  },
];

export const WHY_CHOOSE_POINTS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'We Listen Before We Execute',
    description:
      'Before recommending anything, we study your business — your customers, your competitors, your constraints, and your goals. No guesswork. No assumptions. Just informed strategy built on real understanding of what your business actually needs.',
    highlight: 'Deep Discovery First',
    iconName: 'SearchCheck',
  },
  {
    number: '02',
    title: 'No Templates. No Cookie-Cutters.',
    description:
      `Every solution we deliver is crafted specifically for your business reality. We reject rigid packages and one-size-fits-all formulas. If it doesn't fit your exact situation, we don't use it — period.`,
    highlight: '100% Tailored Solutions',
    iconName: 'Sliders',
  },
  {
    number: '03',
    title: 'Your Project Has One Team — Not Five Vendors',
    description:
      'Developers, designers, marketers, content creators, and legal professionals work together on your project from day one — eliminating the handoff delays, miscommunication, and finger-pointing that quietly kills momentum at growing businesses.',
    highlight: 'Seamless Cross-Functional Flow',
    iconName: 'Users2',
  },
  {
    number: '04',
    title: 'We\'re Still Here After Launch',
    description:
      'Most agencies disappear the moment a project is delivered. We stay — monitoring performance, improving systems, and actively helping your business evolve as it reaches new growth milestones. Launch is the beginning, not the end.',
    highlight: 'Long-Term Growth Partner',
    iconName: 'Infinity',
  },
  {
    number: '05',
    title: 'We Win Only When You Grow',
    description:
      'We don\'t measure success in hours logged or deliverables shipped. We measure it in your revenue, your growth, and your peace of mind. When your business thrives, that\'s how we know we\'ve done our job right.',
    highlight: 'Outcome-Driven ROI',
    iconName: 'Award',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Phase 01',
    number: 1,
    title: 'Discover',
    description:
      'We learn about your business, your customers, your goals, and the exact challenges you’re trying to solve.',
    deliverables: ['Deep-dive stakeholder audit', 'Competitive landscape mapping', 'Scope & requirement specification'],
    iconName: 'Compass',
  },
  {
    step: 'Phase 02',
    number: 2,
    title: 'Plan',
    description:
      'Together, we define priorities, create a structured roadmap, select the right tech stack, and establish a clear direction.',
    deliverables: ['Milestone roadmap & sprints', 'Tech architecture blueprints', 'Resource allocation plan'],
    iconName: 'Map',
  },
  {
    step: 'Phase 03',
    number: 3,
    title: 'Design',
    description:
      'We design experiences and visual systems that are intuitive, engaging, and perfectly aligned with your brand identity.',
    deliverables: ['Interactive wireframes & prototypes', 'UI Design System', 'Brand tone & messaging assets'],
    iconName: 'Layout',
  },
  {
    step: 'Phase 04',
    number: 4,
    title: 'Build',
    description:
      'Our multidisciplinary team brings your vision to life with precision engineering, clean code, quality assurance, and transparency.',
    deliverables: ['Full-stack iterative development', 'Continuous QA & security audits', 'Bi-weekly progress demos'],
    iconName: 'Terminal',
  },
  {
    step: 'Phase 05',
    number: 5,
    title: 'Launch',
    description:
      'We carefully deploy your solution, perform rigorous end-to-end testing, and ensure a smooth, confident go-live transition.',
    deliverables: ['Staging-to-production deployment', 'Performance & load optimization', 'Zero-downtime cutover'],
    iconName: 'Rocket',
  },
  {
    step: 'Phase 06',
    number: 6,
    title: 'Grow',
    description:
      'Our partnership continues beyond launch. We continuously optimize, support, analyze metrics, and help your business evolve.',
    deliverables: ['Proactive maintenance & updates', 'Conversion & user telemetry', 'Ongoing feature scaling'],
    iconName: 'LineChart',
  },
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'How We Work', href: '#process' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Core Services',
    links: [
      { label: 'Technology Solutions', href: '#services' },
      { label: 'Digital Marketing & SEO', href: '#services' },
      { label: 'Branding & UI/UX Design', href: '#services' },
      { label: 'AI & Workflow Automation', href: '#services' },
      { label: 'Legal & Business Compliance', href: '#services' },
      { label: 'Dedicated On-Demand Teams', href: '#services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Startups & Scaleups', href: '#industries' },
      { label: 'Small & Medium Businesses', href: '#industries' },
      { label: 'Healthcare & HealthTech', href: '#industries' },
      { label: 'EdTech & Education', href: '#industries' },
      { label: 'Retail & E-Commerce', href: '#industries' },
      { label: 'Enterprise Systems', href: '#industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Who We Are', href: '#who-we-are' },
      { label: 'Our Collaborative Process', href: '#process' },
      { label: 'Why Svayam Incarnation', href: '#why-choose-us' },
      { label: 'Education & Workshops', href: '#services' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];
