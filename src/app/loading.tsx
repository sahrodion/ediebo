export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-3 rounded-full bg-surface px-4 py-2 text-xs text-textSecondary shadow-soft">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        Loading
      </div>
    </div>
  );
}
