/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0b1a33",
        gold: "#f5d46b",
        purple: "#6b21a8",
      },
      fontFamily: {
        sans: ['Geist Sans', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      }
    }
  },
  plugins: []
};
