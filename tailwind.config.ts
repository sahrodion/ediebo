import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F7FA",
        surface: "#FFFFFF",
        border: "rgba(0, 0, 0, 0.08)",
        textPrimary: "#0B0B0F",
        textSecondary: "rgba(11, 11, 15, 0.6)",
        accent: "#C9A86A",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 15, 20, 0.12)",
        lift: "0 10px 24px rgba(15, 15, 20, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
