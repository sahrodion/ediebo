import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const PricingCard = ({
  title,
  price,
  description,
  features,
  highlighted,
}: PricingCardProps) => (
  <div
    className={cn(
      "flex h-full flex-col rounded-2xl border border-black/15 bg-surface/90 p-6 shadow-soft transition-transform duration-200 hover:scale-[1.02]",
      highlighted ? "ring-1 ring-accent/30" : ""
    )}
  >
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
        {title}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="font-heading text-3xl font-semibold text-textPrimary">
          {price}
        </span>
        <span className="text-sm text-textSecondary">from</span>
      </div>
      <p className="text-sm text-textSecondary">{description}</p>
    </div>
    <ul className="mt-6 space-y-3 text-sm text-textSecondary">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {feature}
        </li>
      ))}
    </ul>
    <div className="mt-8">
      <Button variant={highlighted ? "primary" : "secondary"} href="/contact">
        Book a call
      </Button>
    </div>
  </div>
);
