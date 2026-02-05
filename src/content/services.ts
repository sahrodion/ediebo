export type Service = {
  title: string;
  description: string;
  whoFor: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  popular?: boolean;
};

export const services: Service[] = [
  {
    title: "Website Design & Build",
    description:
      "Custom design and development for brands that need a premium digital presence.",
    whoFor: "Growing businesses that need a best-in-class site",
    deliverables: [
      "UX strategy and page architecture",
      "High-fidelity UI design",
      "Next.js build with performance tuning",
    ],
    timeline: "5-8 weeks",
    startingPrice: "£6,500",
    popular: true,
  },
  {
    title: "Small Business Websites",
    description:
      "Elegant brochure-style sites that clearly communicate services and drive enquiries.",
    whoFor: "Local and service businesses in Manchester and the UK",
    deliverables: [
      "3-6 core pages",
      "Conversion-focused layout",
      "Local SEO setup",
    ],
    timeline: "3-5 weeks",
    startingPrice: "£2,800",
  },
  {
    title: "E-commerce Builds",
    description:
      "Premium product experiences for boutique brands and emerging retailers.",
    whoFor: "Product-based businesses ready to scale online",
    deliverables: [
      "Storefront design system",
      "Product and collection templates",
      "Checkout optimization guidance",
    ],
    timeline: "6-10 weeks",
    startingPrice: "£8,500",
  },
  {
    title: "Landing Pages",
    description:
      "Focused conversion pages for ads, offers, and product launches.",
    whoFor: "Teams running campaigns or validating offers",
    deliverables: [
      "Single-page high-conversion layout",
      "Copy support and CTA strategy",
      "Analytics-ready build",
    ],
    timeline: "2-3 weeks",
    startingPrice: "£1,500",
  },
  {
    title: "SEO Foundations",
    description:
      "Technical and on-page SEO essentials to rank well and stay fast.",
    whoFor: "Businesses needing structured, search-ready pages",
    deliverables: [
      "Metadata and schema setup",
      "Technical performance audit",
      "On-page content structure",
    ],
    timeline: "1-2 weeks",
    startingPrice: "£900",
  },
  {
    title: "Maintenance & Hosting",
    description:
      "Ongoing care with performance checks, updates, and uptime monitoring.",
    whoFor: "Teams who want hands-off website care",
    deliverables: [
      "Monthly health checks",
      "Priority updates and fixes",
      "Hosting guidance and support",
    ],
    timeline: "Monthly",
    startingPrice: "£250/mo",
  },
];

export const servicesOverview = [
  "Design that feels premium and intentional",
  "Clean builds with high Lighthouse scores",
  "SEO-ready foundations for organic growth",
  "Conversion-first layouts and messaging",
  "Ongoing support that keeps sites fast",
  "Analytics-ready delivery for clarity",
];
