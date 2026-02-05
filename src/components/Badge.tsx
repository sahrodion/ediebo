import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export const Badge = ({
  children,
  variant = "default",
  className,
}: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]",
      variant === "accent"
        ? "border-accent/40 text-accent"
        : "border-border text-textSecondary",
      className
    )}
  >
    {children}
  </span>
);
