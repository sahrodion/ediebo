import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { siteConfig } from "@/lib/site";
import { ContactClient } from "@/app/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with EDIEBO LTD in Manchester, UK.",
};

export default function ContactPage() {
  return (
    <div className="bg-background py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Start your next premium web build."
            description="Share a few details and we'll respond within 24 hours."
          />
          <div className="flex flex-wrap gap-3">
            <Button
              href={siteConfig.calendly}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </Button>
          </div>
          <p className="text-sm text-textSecondary">
            Prefer email?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-textPrimary underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
        <ContactClient />
      </Container>
    </div>
  );
}
