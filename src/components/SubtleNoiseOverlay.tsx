export const SubtleNoiseOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-soft-light"
    style={{ backgroundImage: "url('/noise.svg')" }}
    aria-hidden="true"
  />
);
