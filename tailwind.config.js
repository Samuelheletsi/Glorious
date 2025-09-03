/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#3b3395',
        highlightYellow: '#FBBF24',
        lightPurple: '#6B46C1',
        darkBg: '#1C1C1C',
      },
      borderRadius: {
        'xl-rounded': '3rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [], // you can add plugins here later
};
