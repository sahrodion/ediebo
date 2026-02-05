import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "rounded-2xl bg-surface/90 p-6 shadow-soft backdrop-blur",
      className
    )}
  >
    {children}
  </div>
);
