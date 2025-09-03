/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'purple-deep': '#3a2e8d',
        'purple-light': '#4b40a7',
        'purple-dark': '#2e2477',
        'yellow-accent': '#f5d46b',
        'yellow-dark': '#c7a52a',
        'gray-light': '#f7f7f7',
        'gray-medium': '#a3a3a3',
      },
      fontFamily: {
        sans: ['Geist Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      boxShadow: {
        'custom-md': '0 8px 16px rgba(58, 46, 141, 0.2)',
        'custom-lg': '0 12px 24px rgba(58, 46, 141, 0.3)',
      },
      transitionDuration: {
        'fast': '300ms',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};
