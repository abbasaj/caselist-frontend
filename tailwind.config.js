/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          blue: "#1A73E8",
          green: "#34A853",
          yellow: "#FBBC05",
          red: "#EA4335",
          gray: "#F1F3F4",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.06)",
        strong: "0 4px 12px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
