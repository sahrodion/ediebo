import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/Button";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing tiers for premium web builds.",
};

const tiers = [
  {
    title: "Starter",
    price: "£120",
    description: "Simple one-page site delivered fast.",
    features: ["1 page", "Live in 48 hrs", "Mobile ready"],
  },
  {
    title: "Business",
    price: "£250",
    description: "Best for small businesses who need leads.",
    features: ["3 pages", "Contact + WhatsApp", "Most popular choice"],
    highlighted: true,
  },
  {
    title: "Pro",
    price: "£450",
    description: "More space for services and bookings.",
    features: ["5 pages", "Booking form", "Analytics setup"],
  },
];

const comparison = [
  {
    label: "Pages",
    starter: "1 page",
    growth: "3 pages",
    premium: "5 pages",
  },
  {
    label: "Delivery speed",
    starter: "48 hrs",
    growth: "5-7 days",
    premium: "10-14 days",
  },
  {
    label: "Contact",
    starter: "Basic form",
    growth: "Form + WhatsApp",
    premium: "Form + booking",
  },
  {
    label: "Analytics",
    starter: "Optional",
    growth: "Included",
    premium: "Included",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing for small business websites."
          description="Clear tiers designed for fast, modern business sites."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.title} {...tier} />
          ))}
        </div>

        <div className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
                Maintenance add-on
              </p>
              <h3 className="mt-3 font-heading text-2xl text-textPrimary">
                Ongoing care, updates, and performance checks.
              </h3>
              <p className="mt-2 text-sm text-textSecondary">
                From £40/mo with updates, backups, and minor content changes.
              </p>
            </div>
            <Button href="/contact">Add maintenance</Button>
          </div>
        </div>

        <div className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <SectionHeading title="Comparison" />
          <div className="mt-6 grid gap-4 text-sm text-textSecondary">
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid gap-4 border-b border-black/5 pb-4 md:grid-cols-4"
              >
                <span className="text-textPrimary">{row.label}</span>
                <span>{row.starter}</span>
                <span>{row.growth}</span>
                <span>{row.premium}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-6">
            <FAQAccordion items={faqs} />
          </div>
        </div>

        <div className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
                Small business focus
              </p>
              <h3 className="mt-3 font-heading text-2xl text-textPrimary">
                Most businesses choose the £250 option.
              </h3>
            </div>
            <Button href="/contact">Book a call</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
