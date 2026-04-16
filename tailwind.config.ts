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
        pf: {
          bg:      "#1c1c1c",
          bg2:     "#242424",
          card:    "#2a2a2a",
          border:  "#3a3a3a",
          muted:   "#555555",
          warm:    "#999999",
          text:    "#d8d8d8",
          white:   "#f0f0f0",
          red:     "#cc1111",
          redlt:   "#e52222",
          reddark: "#a00d0d",
        },
      },
      fontFamily: {
        title: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
        body:  ["Barlow", "Arial", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        "widest-2": "0.2em",
        "widest-3": "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
