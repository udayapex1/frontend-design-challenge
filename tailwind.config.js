/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // paths to all of the files that might contain Tailwind classes
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  colors: {
    teal: { DEFAULT: "#0CC8A8" },
    critical: "#EF4444",
    high: "#F97316",
    medium: "#F59E0B",
    low: "#22C55E",
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
