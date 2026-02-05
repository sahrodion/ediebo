import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "space-y-4",
      align === "center" ? "text-center" : "text-left",
      className
    )}
  >
    {eyebrow ? (
      <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-heading text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="max-w-2xl text-base leading-relaxed text-textSecondary sm:text-lg">
        {description}
      </p>
    ) : null}
  </div>
);
