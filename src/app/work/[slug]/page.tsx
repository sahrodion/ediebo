import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const normalizeSlug = (slug: string) =>
  decodeURIComponent(slug).toLowerCase().trim();

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug.toLowerCase() }));


export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);
  const project = projects.find(
    (item) => item.slug.toLowerCase() === normalizedSlug
  );
  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);
  const project = projects.find(
    (item) => item.slug.toLowerCase() === normalizedSlug
  );

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="bg-background py-20">
      <Container className="space-y-16">
        <section className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{project.industry}</Badge>
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-semibold text-textPrimary sm:text-5xl">
                {project.title}
              </h1>
              <p className="text-lg text-textSecondary">{project.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button href={project.url} target="_blank" rel="noreferrer">
                  Visit live site
                </Button>
                <Button href="/contact" variant="secondary">
                  Build something like this
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={project.gallery[0]}
                alt={`${project.title} hero`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-surface/90 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
              Role
            </p>
            <p className="mt-3 text-sm text-textPrimary">{project.role}</p>
          </div>
          <div className="rounded-2xl bg-surface/90 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
              Timeline
            </p>
            <p className="mt-3 text-sm text-textPrimary">{project.timeline}</p>
          </div>
          <div className="rounded-2xl bg-surface/90 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs text-textSecondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading title="Problem / Goals" />
            <p className="text-sm text-textSecondary">{project.problem}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-textSecondary">
              {project.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SectionHeading title="Approach" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-textSecondary">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading title="Solution" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-textSecondary">
              {project.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SectionHeading title="Outcomes + Metrics" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-textSecondary">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.metrics.map((metric) => (
                <Badge key={metric} variant="accent">
                  {metric}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading title="Gallery" />
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-surface/90 p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
                Next steps
              </p>
              <h3 className="mt-3 font-heading text-2xl text-textPrimary">
                Build something like this.
              </h3>
            </div>
            <Button href="/contact">Book a call</Button>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-6 pt-6 text-sm text-textSecondary md:flex-row">
          <div className="flex gap-4">
            {prevProject ? (
              <Link href={`/work/${prevProject.slug}`}>
                Previous: {prevProject.title}
              </Link>
            ) : null}
          </div>
          <div className="flex gap-4">
            {nextProject ? (
              <Link href={`/work/${nextProject.slug}`}>
                Next: {nextProject.title}
              </Link>
            ) : null}
          </div>
        </section>
      </Container>
    </div>
  );
}
