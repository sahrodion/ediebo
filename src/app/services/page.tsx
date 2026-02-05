import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Luxury web services engineered for performance and trust.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Premium services for focused, high-converting websites."
          description="Clear packages designed for small businesses and ambitious brands."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-surface/90 p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-xl text-textPrimary">
                  {service.title}
                </h3>
                {service.popular ? (
                  <Badge variant="accent">Most popular</Badge>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-textSecondary">
                {service.description}
              </p>
              <div className="mt-4 space-y-2 text-sm text-textSecondary">
                <p>
                  <span className="text-textPrimary">Who it&apos;s for:</span>{" "}
                  {service.whoFor}
                </p>
                <p>
                  <span className="text-textPrimary">Timeline:</span>{" "}
                  {service.timeline}
                </p>
                <p>
                  <span className="text-textPrimary">Starting at:</span>{" "}
                  {service.startingPrice}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-textSecondary">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
                Ready to start
              </p>
              <h3 className="mt-3 font-heading text-2xl text-textPrimary">
                Let&apos;s scope the right service for your goals.
              </h3>
            </div>
            <Button href="/contact">Book a call</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
