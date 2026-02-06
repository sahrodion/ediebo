import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { MotionWrapper } from "@/components/MotionWrapper";
import { fadeUp } from "@/components/motion";
import { BackgroundLines } from "@/components/BackgroundLines";
import { projects } from "@/content/projects";
import { servicesOverview } from "@/content/services";
import { testimonials } from "@/content/testimonials";

const processSteps = [
  {
    title: "Discovery",
    description:
      "Clarify goals, audience, and the precise story the site must tell.",
  },
  {
    title: "Structure",
    description:
      "Define architecture, conversion paths, and content hierarchy.",
  },
  {
    title: "Design",
    description:
      "Craft a calm, premium UI with obsessive spacing and typographic detail.",
  },
  {
    title: "Build",
    description:
      "Develop a fast, accessible site with high Lighthouse scores.",
  },
  {
    title: "Launch + Optimise",
    description:
      "Ship, monitor performance, and refine for higher conversion.",
  },
];

const pricing = [
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

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-16 sm:py-24">
        <BackgroundLines />
        <Container className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <MotionWrapper variants={fadeUp} className="space-y-6 sm:space-y-8">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-textPrimary sm:text-5xl lg:text-6xl">
              Design-led websites for businesses that take themselves seriously.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-textSecondary sm:text-lg">
            We design and build modern websites for small businesses that care about quality.
            Clean design, fast performance, and clear messaging — so customers trust you and know exactly what to do next.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact">Book a call</Button>
              <Button href="/work" variant="secondary">
                See selected work
              </Button>
            </div>
          </MotionWrapper>
          <div className="relative">
            <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
          </div>
        </Container>
      </section>

      <section className="bg-surface/40 py-8">
        <Container className="space-y-4 text-xs uppercase tracking-[0.3em] text-textSecondary">
          <span>Trusted by teams across the UK</span>
          <div className="relative overflow-hidden">
            <div className="flex min-w-[200%] gap-10 whitespace-nowrap text-sm tracking-wide text-textSecondary [animation:marquee-left_24s_linear_infinite]">
              <span>DreamRetouching</span>
              <span>Ekasiu</span>
              <span>Lumen Kitchen</span>
              <span>Northline Atelier</span>
              <span>Cut &amp; Crafted</span>
              <span>Josiah&apos;s ID</span>
              <span>DreamRetouching</span>
              <span>Ekasiu</span>
              <span>Lumen Kitchen</span>
              <span>Northline Atelier</span>
              <span>Cut &amp; Crafted</span>
              <span>Josiah&apos;s ID</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Featured work"
            title="Premium builds with measurable outcomes."
            description="Selected projects that balance aesthetic restraint with conversion-first structure."
          />
          <p className="max-w-2xl text-sm text-textSecondary sm:text-base">
            A selection of projects where clarity, performance, and design came
            together.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} showTags={false} />
            ))}
          </div>
          <div>
            <Button href="/work" variant="secondary">
              See selected work
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface/50 py-16 sm:py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <SectionHeading
            eyebrow="Services"
            title="Designed for clarity, engineered for conversion."
            description="Every engagement is shaped around premium design, performance, and trust."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {servicesOverview.map((service) => (
              <div
                key={service}
                className="rounded-2xl bg-background/80 p-5 text-sm text-textSecondary shadow-soft"
              >
                {service}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Process"
            title="Calm, structured, and obsessively detailed."
            description="A simple, refined process that keeps momentum and elevates quality."
          />
          <Timeline items={processSteps} />
        </Container>
      </section>

      <section className="bg-surface/50 py-16 sm:py-20">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Clients who value craft and outcomes."
            description="Premium experiences backed by measurable performance."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Pricing"
            title="A clear starting point for premium builds."
            description="Every engagement is tailored, with transparent starting tiers."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((tier) => (
              <PricingCard key={tier.title} {...tier} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface/50 py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
              Ready to build
            </p>
            <h2 className="font-heading text-2xl font-semibold text-textPrimary sm:text-3xl">
              Let&apos;s craft a site that feels premium and converts.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/contact" className="w-full sm:w-auto">
              Book a call
            </Button>
            <Button
              href="/work"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              See selected work
            </Button>
          </div>
        </Container>
      </section>
      <div className="sr-only">
        <Link href="/contact">Book a call</Link>
      </div>
    </div>
  );
}
