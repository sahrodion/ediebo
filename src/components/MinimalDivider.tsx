import { cn } from "@/lib/utils";

type MinimalDividerProps = {
  className?: string;
};

export const MinimalDivider = ({ className }: MinimalDividerProps) => (
  <div className={cn("h-px w-full bg-border", className)} />
);
