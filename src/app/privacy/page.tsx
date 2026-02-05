import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for EDIEBO LTD.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background py-20">
      <Container className="space-y-6 text-sm text-textSecondary">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy policy"
          description="We respect your privacy and handle data responsibly."
        />
        <p>
          EDIEBO LTD collects information you submit via our contact form, such
          as name, email, and project details. This data is used only to respond
          to enquiries and provide requested services.
        </p>
        <p>
          We do not sell or share your information with third parties. You can
          request deletion of your data at any time by emailing us.
        </p>
        <p>
          For questions about this policy, contact hello@ediebo.co.uk.
        </p>
      </Container>
    </div>
  );
}
