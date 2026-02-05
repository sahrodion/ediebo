import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for EDIEBO LTD.",
};

export default function TermsPage() {
  return (
    <div className="bg-background py-20">
      <Container className="space-y-6 text-sm text-textSecondary">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of service"
          description="By working with EDIEBO LTD you agree to the following."
        />
        <p>
          All project timelines, deliverables, and fees are agreed in writing
          before work begins. Any additional scope is quoted separately.
        </p>
        <p>
          Final deliverables are provided upon receipt of final payment. Hosting
          and maintenance are offered as separate add-ons.
        </p>
        <p>
          For questions about these terms, contact hello@ediebo.co.uk.
        </p>
      </Container>
    </div>
  );
}
