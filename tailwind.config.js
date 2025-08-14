/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
        inter: ["Inter", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};