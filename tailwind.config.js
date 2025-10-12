/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0e0f14",
        card: "#141620",
        border: "#1e293b",
        foreground: "#e2e8f0",
        "muted-foreground": "#94a3b8",
        accent: "#8b5cf6", // purple
        primary: "#14b8a6", // teal
        muted: "#1e1f2a",
      },
      fontFamily: {
        sans: ["Inter", "Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
