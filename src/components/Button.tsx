import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-textPrimary text-background hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "border-border bg-surface text-textPrimary hover:-translate-y-0.5 hover:shadow-lift",
  ghost:
    "border-transparent text-textSecondary hover:text-textPrimary hover:-translate-y-0.5",
};

export const Button = ({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
}: ButtonProps) => {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
