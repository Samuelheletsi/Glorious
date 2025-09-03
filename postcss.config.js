/** @type {import('postcss').ProcessOptions} */
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ← IMPORTANT, not 'tailwindcss' directly
    autoprefixer: {},
  },
};
