export interface ServiceItem {
  id: string;
  category: "marketing" | "technology" | "growth";
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  metrics: string;
  tags: string[];
  icon: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: "all" | "marketing" | "tech" | "seo" | "ecommerce";
  categoryLabel: string;
  title: string;
  description: string;
  metrics: { label: string; value: string; change: string }[];
  tags: string[];
  deliverables: string[];
  imageBg: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  content: string;
  highlight: string;
  platform: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const AGENCY_INFO = {
  name: "Xntrova Technologies",
  shortName: "Xntrova",
  tagline: "Driven By Ideas. Focused on Results.",
  subTagline: "Premier Digital Marketing & Technology Agency in Delhi NCR",
  phone: "+91 91424-79986",
  phoneRaw: "9142479986",
  whatsapp: "919142479986",
  whatsappDisplay: "+91 91424-79986",
  email: "info@xntrova.com",
  address: "A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077, India",
  googleRating: "4.9/5",
  reviewsCount: "250+",
  clutchRating: "4.9/5",
  trustpilotRating: "4.8/5",
  foundedYear: "2018",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "seo",
    category: "marketing",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Dominate search results, secure high-intent organic rankings, and drive consistent inbound business.",
    longDesc: "Our end-to-end SEO methodology unites deep keyword architecture, technical performance optimization, content cluster creation, and high-authority link acquisition for compounding organic visibility.",
    features: [
      "Technical SEO Auditing & Core Web Vitals Fixes",
      "High-Intent Keyword Research & Semantic Mapping",
      "Authority Building & Digital PR Outreach",
      "Local SEO & Google Business Profile Domination",
    ],
    metrics: "",
    tags: ["Technical SEO", "On-Page", "Link Building", "Local SEO"],
    icon: "search",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ppc",
    category: "marketing",
    title: "Performance Marketing & Paid Ads",
    shortDesc: "Hyper-targeted campaigns across Google, Meta, and LinkedIn engineered for maximum return on ad spend.",
    longDesc: "We eliminate ad budget waste through precision audience modeling, relentless A/B testing of creatives, conversion rate optimization, and automated bidding algorithms that maximize profitability.",
    features: [
      "Google Search, Performance Max & Shopping Campaigns",
      "Meta (Facebook & Instagram) Dynamic Creative Ads",
      "B2B LinkedIn Targeted ABM Campaigns",
      "Cross-channel Retargeting & Attribution Modeling",
    ],
    metrics: "",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Remarketing"],
    icon: "target",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "web-dev",
    category: "technology",
    title: "Website & Web Application Development",
    shortDesc: "Ultra-fast, responsive Next.js and custom web solutions designed to convert visitors into lifelong clients.",
    longDesc: "We bridge cutting-edge front-end engineering with frictionless UX. From bespoke corporate websites to scalable web apps and CMS platforms, every line of code is optimized for speed, SEO, and conversions.",
    features: [
      "Next.js, React & Modern Headless Architecture",
      "Mobile-First Responsive & Accessible UI/UX",
      "Custom WordPress & Headless CMS Engineering",
      "Sub-second Load Times & Top Core Web Vitals Score",
    ],
    metrics: "",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CMS"],
    icon: "code",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ecommerce",
    category: "growth",
    title: "E-Commerce Growth Marketing",
    shortDesc: "Scale your DTC brand or storefront with full-funnel customer acquisition and lifetime value optimization.",
    longDesc: "Transform clicks into revenue with tailored e-commerce strategies. We combine Shopify/WooCommerce optimization, abandoned cart recovery, product catalog ads, and retention funnels to accelerate GMV.",
    features: [
      "Shopify & WooCommerce Custom Storefront Optimization",
      "Multi-Channel Catalog & Dynamic Shopping Ads",
      "Checkout Flow CRO & Average Order Value (AOV) Boosts",
      "Retention, Email Sequences & Loyalty Programs",
    ],
    metrics: "",
    tags: ["Shopify", "WooCommerce", "DTC", "Conversion Rate"],
    icon: "shopping-bag",
    image: "/images/ecommerce_growth.jpg",
  },
  {
    id: "social-media",
    category: "marketing",
    title: "Social Media Marketing & Management",
    shortDesc: "Build an authentic, highly engaged community that advocates for your brand and amplifies your voice.",
    longDesc: "We craft thumb-stopping content, manage multi-platform organic strategies, and orchestrate influencer partnerships that transform casual scrollers into brand champions.",
    features: [
      "Brand Storytelling & Viral Video / Reel Creation",
      "Community Management & Rapid Engagement Protocols",
      "Influencer Partnerships & Collaborations",
      "Data-Driven Social Analytics & Trend Jacking",
    ],
    metrics: "",
    tags: ["Instagram", "LinkedIn", "YouTube", "Content Creation"],
    icon: "share2",
    image: "/images/social_media.jpg",
  },
  {
    id: "content-cro",
    category: "growth",
    title: "Content Marketing & Conversion Optimization",
    shortDesc: "Compelling thought leadership and scientific CRO experiments that double your landing page conversion rates.",
    longDesc: "Content that informs, persuades, and drives immediate action. Combined with multivariate landing page testing and user heatmaps, we turn existing traffic into qualified pipeline opportunities.",
    features: [
      "Editorial Strategy & High-Value Whitepapers / Case Studies",
      "Heatmap & User Journey Friction Point Audits",
      "High-Converting Landing Page Design & Copywriting",
      "A/B Split Testing & Conversion Funnel Streamlining",
    ],
    metrics: "",
    tags: ["CRO", "Copywriting", "Heatmaps", "Funnel Strategy"],
    icon: "bar-chart3",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fortune-mattresses",
    client: "Fortune Mattresses",
    category: "ecommerce",
    categoryLabel: "E-Commerce Scale",
    title: "Scaling DTC Sleep Brand to Multi-Crore Revenue with Meta Ads & CRO",
    description: "Re-engineered the digital storefront checkout flow and deployed dynamic catalogue retargeting across Google Performance Max and Meta Ads.",
    metrics: [
      { label: "Revenue Growth", value: "+320%", change: "in 6 months" },
      { label: "ROAS Achieved", value: "4.8x", change: "blended return" },
      { label: "Conversion Rate", value: "3.4%", change: "+140% lift" },
    ],
    tags: ["E-Commerce", "Meta Ads", "Shopify CRO", "Performance Max"],
    deliverables: ["Custom Storefront UX", "Multi-tier Funnel Ads", "Email Automation Sequences"],
    imageBg: "from-sky-900/60 to-blue-950/80",
  },
  {
    id: "scholar-scribe",
    client: "Scholar Scribe Solutions",
    category: "seo",
    categoryLabel: "SEO & Content",
    title: "Dominating Search Engines: +420% Organic Leads for EdTech Provider",
    description: "Built high-authority topical content clusters and resolved deep technical crawl bottlenecks to capture #1 rankings for high-intent academic terms.",
    metrics: [
      { label: "Organic Inquiries", value: "+420%", change: "year-over-year" },
      { label: "Top 3 Keywords", value: "850+", change: "high intent terms" },
      { label: "Domain Authority", value: "48 -> 72", change: "+24 points" },
    ],
    tags: ["Enterprise SEO", "Technical SEO", "Content Clustering", "B2B"],
    deliverables: ["Core Web Vitals Revamp", "Topical Authority Roadmap", "Digital PR Link Engine"],
    imageBg: "from-teal-900/60 to-slate-950/80",
  },
  {
    id: "federal-ministry",
    client: "Federal Ministry & NITDA",
    category: "tech",
    categoryLabel: "Enterprise Web App",
    title: "Modernizing Public Sector Digital Portal with Next.js & Cloud Architecture",
    description: "Architected a responsive, lightning-fast digital citizen portal serving millions of monthly requests with zero downtime and ironclad accessibility.",
    metrics: [
      { label: "Page Load Speed", value: "0.8s", change: "down from 4.6s" },
      { label: "Uptime SLA", value: "99.99%", change: "enterprise cloud" },
      { label: "Mobile Users Served", value: "2.4M+", change: "across regions" },
    ],
    tags: ["Next.js", "Cloud Infra", "UI/UX Architecture", "Accessibility"],
    deliverables: ["Micro-frontend Architecture", "WCAG 2.1 Compliance", "Performance Engineering"],
    imageBg: "from-indigo-950/70 to-slate-950/90",
  },
  {
    id: "amritya-wellness",
    client: "Amritya Wellness",
    category: "marketing",
    categoryLabel: "Performance PPC",
    title: "Hyper-Local Lead Generation & Paid Media Scaling for Healthcare Clinic",
    description: "Built geo-fenced search intent ad groups with automated call tracking, reducing customer acquisition costs by 48% within 90 days.",
    metrics: [
      { label: "Qualified Patient Leads", value: "+280%", change: "per month" },
      { label: "Cost Per Lead", value: "-48%", change: "reduced CAC" },
      { label: "Appointment Rate", value: "68%", change: "show-up rate" },
    ],
    tags: ["Google Search", "Local PPC", "Call Tracking", "Healthcare"],
    deliverables: ["High-Converting Landing Pages", "Google Smart Bidding", "CRM Sync"],
    imageBg: "from-cyan-950/70 to-sky-950/80",
  },
  {
    id: "chetan-herbals",
    client: "Chetan Herbals",
    category: "ecommerce",
    categoryLabel: "Brand Repositioning",
    title: "Revamping Heritage Ayurvedic Brand for Next-Gen DTC Consumers",
    description: "Complete visual redesign, headless e-commerce store implementation, and targeted Instagram & influencer launch campaigns.",
    metrics: [
      { label: "DTC Orders", value: "+380%", change: "post launch" },
      { label: "Cart Abandonment", value: "-32%", change: "streamlined checkout" },
      { label: "Brand Mentions", value: "15k+", change: "across social" },
    ],
    tags: ["DTC Rebrand", "Shopify", "Influencer Collabs", "Packaging UI"],
    deliverables: ["Brand Identity System", "Speed-Optimized Theme", "Omnichannel Launch Strategy"],
    imageBg: "from-emerald-950/70 to-slate-950/90",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amit Verma",
    role: "Founder & Managing Director",
    company: "Scholar Scribe Solutions",
    avatarText: "AV",
    rating: 5,
    highlight: "Strategic Mindset & Custom Playbooks",
    content: "What impressed us most about Xntrova was their strategic mindset. Unlike other agencies that sell generic packages, Xntrova engineered a custom search engine strategy for our exact industry. Their data-driven transparency gave us total confidence in our growth pipeline.",
    platform: "Clutch Verified",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Deep Audit",
    duration: "Week 1",
    description: "We analyze your digital footprint, technical infrastructure, competitive landscape, and customer journey bottlenecks to reveal untapped high-ROI opportunities.",
    deliverables: ["Full 40+ Point Digital Audit", "Competitor Matrix & Gap Analysis", "Growth Opportunity Roadmap"],
  },
  {
    step: "02",
    title: "Strategic Architecture",
    duration: "Week 2",
    description: "We build custom growth sprints and technical specifications. No cookie-cutter templates—only bespoke strategies calibrated for your exact unit economics.",
    deliverables: ["KPI & Attribution Framework", "Creative Concepts & Copy Prototypes", "Sprint Timelines & Deliverables"],
  },
  {
    step: "03",
    title: "Precision Execution",
    duration: "Weeks 3 - 6",
    description: "Our dedicated squads launch high-performance campaigns, deploy speed-optimized web architectures, and implement tracking systems with surgical accuracy.",
    deliverables: ["Campaign Launch Across Channels", "Next-Gen Web Architecture", "Real-time Analytics Dashboard"],
  },
  {
    step: "04",
    title: "Scale, Test & Compound",
    duration: "Ongoing",
    description: "We relentlessly A/B test creatives, optimize conversion rates, and allocate budget toward top-performing segments to achieve compounding business returns.",
    deliverables: ["Weekly Sprint Reports", "CRO Multivariate Testing", "Quarterly Expansion Roadmaps"],
  },
];

export const KEY_BENEFITS = [
  {
    icon: "shield-check",
    title: "ROI-First Engineering",
    desc: "Every campaign, line of code, and creative asset is tied directly to measurable pipeline revenue and customer acquisition cost reduction.",
    badge: "Results-Driven",
  },
  {
    icon: "eye",
    title: "100% Real-Time Transparency",
    desc: "No black boxes or vague monthly reports. You get 24/7 access to live client dashboards detailing spend, leads, and conversion metrics.",
    badge: "Zero Fluff",
  },
  {
    icon: "users",
    title: "Dedicated Senior Squad",
    desc: "You collaborate directly with seasoned technical leads, senior strategists, and performance marketers—not junior interns or account handoffs.",
    badge: "Senior Experts",
  },
  {
    icon: "cpu",
    title: "AI-Augmented Execution",
    desc: "We leverage proprietary predictive data models and automated optimization workflows while maintaining distinct human creative intuition.",
    badge: "Cutting-Edge",
  },
  {
    icon: "zap",
    title: "Agile 2-Week Sprints",
    desc: "Fast turnaround times without sacrificing quality. We test, iterate, and adapt to market shifts with startup agility and enterprise precision.",
    badge: "High Velocity",
  },
  {
    icon: "award",
    title: "Proven Track Record",
    desc: "Over 120+ successful projects launched, 500+ satisfied clients, and consistently rated 4.9/5 across Clutch, GoodFirms, and Google Reviews.",
    badge: "Top Rated",
  },
];

export const STATS = [
  { value: "250%+", label: "Avg. Organic Traffic Lift", detail: "Across SEO client base in 6-12 months" },
  { value: "4.2x", label: "Average Paid Ads ROAS", detail: "Across Google & Meta e-commerce campaigns" },
  { value: "120+", label: "Projects Delivered", detail: "Web apps, CMS platforms & campaigns" },
  { value: "98%", label: "Client Retention Rate", detail: "Partnerships lasting over 18+ months" },
];

export const TRUST_CLIENTS = [
  "Fortune Mattresses",
  "Scholar Scribe",
  "Federal Ministry & NITDA",
  "Amritya Wellness",
  "Chetan Herbals",
  "Berryan Luiz",
  "Umbrella Infocare",
  "Pitti Jewels",
  "Range Lilies",
  "Onsa",
  "Etex",
  "Mahadev Tours",
];

export const TECH_TOOLS = [
  { name: "Next.js", category: "Framework" },
  { name: "React 19", category: "Front-end" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Google Ads", category: "Paid Media" },
  { name: "Meta Ads Manager", category: "Social PPC" },
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "Ahrefs", category: "SEO Intelligence" },
  { name: "SEMrush", category: "Competitor Intel" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "WordPress / Headless", category: "CMS" },
  { name: "Figma", category: "UI/UX Design" },
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "How long does it take to see tangible results from digital marketing?",
    answer: "The timeline depends on the chosen channel. Paid advertising (PPC & Meta Ads) produces immediate leads and measurable traffic within 48 to 72 hours of launch. In contrast, comprehensive SEO and content marketing typically require 60 to 90 days to achieve compounding organic rankings and sustainable search traffic.",
  },
  {
    category: "Strategy",
    question: "How does Xntrova tailor marketing strategies for unique businesses?",
    answer: "We never utilize generic, one-size-fits-all packages. Every engagement begins with a deep forensic audit of your market positioning, competitor gap analysis, customer unit economics, and current digital assets. We then build an agile sprint plan specifically mapped to your revenue milestones.",
  },
  {
    category: "Reporting",
    question: "Will I receive regular reporting and updates on campaign performance?",
    answer: "Yes, 100%. Transparency is a foundational value at Xntrova. You receive a dedicated 24/7 live Looker Studio dashboard tracking key business metrics (spend, conversions, CAC, ROAS), bi-weekly sprint review calls, and direct Slack/WhatsApp communication with your dedicated squad lead.",
  },
  {
    category: "Services",
    question: "Which digital service is right for my current stage of business?",
    answer: "If you need immediate qualified sales inquiries or product sales, Performance Marketing (Google Search + Meta Ads) combined with CRO is recommended. If your goal is long-term brand equity, lowering customer acquisition costs, and dominating industry search terms, an integrated SEO and Custom Web Development strategy is optimal. Our free digital audit will identify your exact highest-leverage opportunity.",
  },
  {
    category: "Differentiation",
    question: "What makes Xntrova different from other agencies in Delhi NCR?",
    answer: "Most traditional agencies operate in silos—marketing teams don't understand code, and developers don't understand conversions. Xntrova unites full-stack software engineers, data analysts, and high-performance growth marketers under one roof. We optimize the entire customer journey from the first ad impression to checkout performance and backend retention.",
  },
  {
    category: "Pricing",
    question: "What are your engagement models and pricing structure?",
    answer: "We offer flexible models tailored to your growth stage: Monthly Strategic Retainers (for ongoing SEO, PPC, and growth scaling), Fixed-Scope Projects (for website redesigns and custom web app development), and Hybrid Performance Retainers. Every proposal includes a clear deliverables matrix and ROI projection.",
  },
];
