export const BackgroundLines = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div
      className="absolute left-[10%] top-0 h-40 w-0.5 bg-black/12"
      style={{ animation: "line-fall 8s linear infinite" }}
    />
    <div
      className="absolute left-[35%] top-0 h-56 w-0.5 bg-black/10"
      style={{ animation: "line-fall 10s linear infinite", animationDelay: "1s" }}
    />
    <div
      className="absolute left-[60%] top-0 h-44 w-0.5 bg-black/12"
      style={{ animation: "line-fall 9s linear infinite", animationDelay: "2s" }}
    />
    <div
      className="absolute left-[82%] top-0 h-64 w-0.5 bg-black/8"
      style={{ animation: "line-fall 11s linear infinite", animationDelay: "3s" }}
    />
  </div>
);
