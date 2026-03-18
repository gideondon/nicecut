import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8A84B",
          light: "#E8C870",
          dark: "#A07828",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          surface: "#161616",
          card: "#1E1E1E",
          border: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A84B 0%, #E8C870 50%, #C8A84B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
