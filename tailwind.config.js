/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abenda: ['Abenda', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')]
};
