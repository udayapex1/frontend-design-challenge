/** @type {import('tailwindcss').Config} */
export default {
 
  darkMode: 'class',
  content: [
  
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
        keyframes: {
      shimmer: {
        '100%': { transform: 'translateX(100%)' }
      }
    },
    },
  },
  plugins: [],
};
