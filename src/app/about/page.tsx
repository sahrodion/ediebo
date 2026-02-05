import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "EDIEBO LTD - premium web builds from Manchester, UK.",
};

const values = [
  {
    title: "Craftsmanship",
    description: "Every detail is considered. Layouts feel calm and precise.",
  },
  {
    title: "Clarity",
    description:
      "We remove noise so your customers can understand, decide, and act.",
  },
  {
    title: "Performance",
    description: "Fast, accessible builds that score high in Lighthouse.",
  },
  {
    title: "Trust",
    description:
      "Structured, premium experiences that build credibility instantly.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="About"
          title="EDIEBO LTD designs premium websites engineered for trust."
          description="We are a Manchester-based studio focused on minimalist, performance-led web experiences."
        />
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4 text-sm text-textSecondary">
            <p>
              EDIEBO LTD builds luxury websites that feel effortless. We work
              with ambitious teams who value clarity, conversion, and calm
              design that instantly communicates quality.
            </p>
            <p>
              Every engagement is structured to align brand, user, and business
              goals - with thoughtful UX, clean engineering, and premium motion
              throughout.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/projects/ekasiu-2.svg"
              alt="Studio preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-surface/90 p-6 shadow-soft"
            >
              <h3 className="font-heading text-lg text-textPrimary">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-textSecondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
                Capability
              </p>
              <h3 className="mt-3 font-heading text-2xl text-textPrimary">
                Next.js, TypeScript, Tailwind, Framer Motion, Vercel.
              </h3>
              <p className="mt-2 text-sm text-textSecondary">
                A modern stack built for speed, stability, and premium motion.
              </p>
            </div>
            <Button href="/contact">Book a call</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
