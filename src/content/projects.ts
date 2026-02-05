export type Project = {
  slug: string;
  title: string;
  clientName: string;
  url: string;
  year: number;
  industry: string;
  featured: boolean;
  tags: string[];
  role: string;
  timeline: string;
  techStack: string[];
  summary: string;
  problem: string;
  goals: string[];
  approach: string[];
  solution: string[];
  outcomes: string[];
  metrics: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "dreamretouching",
    title: "DreamRetouching",
    clientName: "DreamRetouching",
    url: "https://dreamretouching.com",
    year: 2024,
    industry: "Photography / Retouching Services",
    featured: true,
    tags: ["Business Website", "Portfolio", "Lead Gen"],
    role: "Strategy, design, full-stack build",
    timeline: "6 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    summary:
      "A minimal, gallery-led site that showcases retouching work, pricing, and a direct booking flow.",
    problem:
      "The client needed a simple, powerful way to display retouching quality, surface pricing, and let visitors book without friction.",
    goals: [
      "Showcase retouching work in a clean, focused gallery",
      "Make pricing easy to find and understand",
      "Enable direct booking from the website",
      "Keep the experience minimal but confident",
    ],
    approach: [
      "Built a gallery-first layout with clear category structure",
      "Placed pricing and booking CTAs in key touchpoints",
      "Kept the UI minimal with strong typography and whitespace",
      "Optimized images for fast loading without losing detail",
    ],
    solution: [
      "Minimal layout with a hero gallery and clear service categories",
      "Dedicated pricing section linked from the main navigation",
      "Booking-focused CTAs and a short enquiry flow",
    ],
    outcomes: [
      "Clearer positioning for new clients",
      "More enquiries coming directly from the pricing page",
    ],
    metrics: ["+34% booking enquiries", "Pricing page click-through +41%"],
    gallery: [
      "/images/projects/dreamretouching-1.png",
      "/images/projects/dreamretouching-2.svg",
      "/images/projects/dreamretouching-3.svg",
    ],
  },
  {
    slug: "ekasiu",
    title: "Ekasiu",
    clientName: "Ekasiu",
    url: "https://ekasiu.co.uk",
    year: 2024,
    industry: "Services / Local Business",
    featured: true,
    tags: ["Business Website", "Local SEO", "Lead Gen"],
    role: "Strategy, UX, build, SEO foundation",
    timeline: "5 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    summary:
      "A location-targeted services site that turns local search into booked enquiries.",
    problem:
      "Local customers struggled to understand the offering quickly, and the old site lacked SEO structure.",
    goals: [
      "Clarify services in the first screen",
      "Improve local search visibility for Manchester",
      "Increase conversion from mobile visitors",
    ],
    approach: [
      "Built service-first navigation with clear service modules",
      "Implemented local SEO copy blocks and schema",
      "Optimized performance for instant mobile loads",
    ],
    solution: [
      "Crisp service cards and proof-driven sections",
      "Trust signals and local coverage badges",
      "Fast, focused enquiry capture in two steps",
    ],
    outcomes: [
      "Improved visibility for local searches",
      "More consistent enquiry volume",
    ],
    metrics: ["+44% organic enquiries", "Top 3 for key local terms"],
    gallery: [
      "/images/projects/ekasiu-1.svg",
      "/images/projects/ekasiu-2.svg",
      "/images/projects/ekasiu-3.svg",
    ],
  },
  {
    slug: "josiahs-id",
    title: "Josiah's ID",
    clientName: "Josiah's ID",
    url: "https://josiahsid.com",
    year: 2023,
    industry: "Personal Brand / Portfolio",
    featured: true,
    tags: ["Portfolio", "Personal Brand", "Landing Page"],
    role: "Creative direction, design, build",
    timeline: "4 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    summary:
      "A minimal personal brand site with a premium portfolio layout and direct contact CTA.",
    problem:
      "The previous portfolio lacked positioning and felt generic, reducing inbound confidence.",
    goals: [
      "Craft a distinct visual voice",
      "Showcase work without distractions",
      "Drive direct inbound requests",
    ],
    approach: [
      "Defined brand tone and a bold typographic system",
      "Built a modular grid for featured work",
      "Added a simple, high-intent contact path",
    ],
    solution: [
      "Premium dark canvas with precise spacing",
      "Focused case highlights and succinct summaries",
      "Contact CTA repeated with minimal friction",
    ],
    outcomes: ["Clearer brand positioning and stronger inbound quality"],
    metrics: ["+29% direct inquiries", "2.1x time on page"],
    gallery: [
      "/images/projects/josiahsid-1.svg",
      "/images/projects/josiahsid-2.svg",
    ],
  },
  {
    slug: "cut-and-crafted",
    title: "Cut & Crafted",
    clientName: "Cut & Crafted",
    url: "https://cutandcrafted.co.uk",
    year: 2024,
    industry: "Barber / Grooming",
    featured: false,
    tags: ["Brand Site", "Booking", "Local SEO"],
    role: "Design, build, booking integration",
    timeline: "4 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    summary:
      "A refined barber brand site with premium editorial styling and fast booking access.",
    problem:
      "The brand lacked a premium digital presence and bookings were handled manually.",
    goals: [
      "Upgrade the brand's digital perception",
      "Increase bookings from mobile users",
      "Showcase services and pricing clearly",
    ],
    approach: [
      "Built a visual identity anchored in editorial typography",
      "Streamlined service and pricing layout",
      "Added booking CTA in key touchpoints",
    ],
    solution: [
      "Luxury feel with focused service cards",
      "Clear appointment CTA in the hero and footer",
      "Performance-first build for quick access",
    ],
    outcomes: ["Stronger brand trust and higher booking volume"],
    metrics: ["+33% booking conversions", "0.9s TTI"],
    gallery: [
      "/images/projects/cutcrafted-1.svg",
      "/images/projects/cutcrafted-2.svg",
    ],
  },
  {
    slug: "lumen-kitchen",
    title: "Lumen Kitchen",
    clientName: "Lumen Kitchen",
    url: "https://lumenkitchen.co.uk",
    year: 2023,
    industry: "Restaurant / Hospitality",
    featured: false,
    tags: ["Landing Page", "Reservations", "Hospitality"],
    role: "Design, build, content structure",
    timeline: "3 weeks",
    techStack: ["Next.js", "Tailwind CSS"],
    summary:
      "An elegant restaurant landing page designed to drive reservations and highlight the menu.",
    problem:
      "The restaurant had no digital presence and relied solely on walk-ins.",
    goals: [
      "Create a premium first impression",
      "Drive reservations through a single focused page",
      "Highlight menu and ambience quickly",
    ],
    approach: [
      "Built a narrative layout with restrained imagery",
      "Created clear reservation CTAs",
      "Optimized for mobile discovery",
    ],
    solution: [
      "Minimal layout with immersive hero imagery",
      "Menu highlights and social proof",
      "Quick reservation path with contact options",
    ],
    outcomes: ["Consistent reservation inquiries and higher dwell time"],
    metrics: ["+52% reservation requests", "3.6x menu views"],
    gallery: [
      "/images/projects/lumen-1.svg",
      "/images/projects/lumen-2.svg",
    ],
  },
  {
    slug: "northline-atelier",
    title: "Northline Atelier",
    clientName: "Northline Atelier",
    url: "https://northlineatelier.co.uk",
    year: 2024,
    industry: "Small E-commerce Brand",
    featured: false,
    tags: ["E-commerce", "Product", "Brand"],
    role: "Design, build, Shopify handoff",
    timeline: "6 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    summary:
      "A boutique commerce site that blends product focus with a premium brand story.",
    problem:
      "The brand's product pages lacked clarity and the store felt inconsistent.",
    goals: [
      "Create a high-end shopping experience",
      "Improve product clarity and trust",
      "Reduce drop-off during checkout",
    ],
    approach: [
      "Designed a clean product grid and editorial PDPs",
      "Rewrote product messaging for clarity",
      "Added trust markers and shipping clarity",
    ],
    solution: [
      "Crisp product cards with hover detail reveals",
      "Editorial story blocks for brand depth",
      "Clear shipping and returns module",
    ],
    outcomes: ["More confident purchases and improved order values"],
    metrics: ["+27% conversion rate", "+18% average order value"],
    gallery: [
      "/images/projects/northline-1.svg",
      "/images/projects/northline-2.svg",
      "/images/projects/northline-3.svg",
    ],
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
