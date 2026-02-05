import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work by EDIEBO LTD across Manchester and beyond.",
};

export default function WorkPage() {
  return (
    <div className="bg-background py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Work"
          title="Web builds crafted for clarity, speed, and trust."
          description="Explore case studies and recent builds."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} showTags={false} />
          ))}
        </div>
      </Container>
    </div>
  );
}
