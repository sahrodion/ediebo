import { cn } from "@/lib/utils";

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export const Timeline = ({ items, className }: TimelineProps) => (
  <div className={cn("space-y-6", className)}>
    {items.map((item, index) => (
      <div key={item.title} className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm text-textSecondary">
            {String(index + 1).padStart(2, "0")}
          </div>
          {index < items.length - 1 ? (
            <div className="mt-2 h-full w-px bg-border" />
          ) : null}
        </div>
        <div className="pb-6">
          <h3 className="font-heading text-lg font-semibold text-textPrimary">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-textSecondary">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);
