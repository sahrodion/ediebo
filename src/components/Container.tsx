import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6", className)}>
    {children}
  </div>
);
