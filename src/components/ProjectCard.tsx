import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/Badge";

type ProjectCardProps = {
  project: Project;
  className?: string;
  showTags?: boolean;
};

export const ProjectCard = ({
  project,
  className,
  showTags = true,
}: ProjectCardProps) => (
  <Link
    href={`/work/${project.slug}`}
    className={cn(
      "group flex h-full flex-col overflow-hidden rounded-2xl bg-surface/90 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift",
      className
    )}
  >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={project.gallery[0]}
        alt={`${project.title} preview`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      {project.featured ? (
        <Badge className="absolute left-4 top-4" variant="accent">
          Featured
        </Badge>
      ) : null}
    </div>
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-textSecondary">
        <span>{project.industry}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="font-heading text-xl font-semibold text-textPrimary">
        {project.title}
      </h3>
      <p className="text-sm text-textSecondary">{project.summary}</p>
      {showTags ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-textSecondary"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  </Link>
);
