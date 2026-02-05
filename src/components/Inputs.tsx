import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input = ({ className, ...props }: InputProps) => (
  <input
    className={cn(
      "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-textPrimary placeholder:text-textSecondary focus:border-white/40 focus:outline-none",
      className
    )}
    {...props}
  />
);

export const Select = ({ className, ...props }: SelectProps) => (
  <select
    className={cn(
      "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-textPrimary focus:border-white/40 focus:outline-none",
      className
    )}
    {...props}
  />
);

export const Textarea = ({ className, ...props }: TextareaProps) => (
  <textarea
    className={cn(
      "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-textPrimary placeholder:text-textSecondary focus:border-white/40 focus:outline-none",
      className
    )}
    {...props}
  />
);
