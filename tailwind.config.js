/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/assets/images/background.png')"
      },
      fontFamily: {
        abenda: ['Abenda', 'sans-serif'],
        han: ['SourceHanSerif', 'sans-serif']
      },
      colors: {
        textPrimary: '#F29BAB',
        secondary: '#0C0B26',
        tertiary: '#181A40',
        quaternary: '#C4D0F2'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          accent: '#F29BAB',
          primary: '#F29BAB',
          secondary: '#0C0B26',
          error: '#181A40',
          quaternary: '#C4D0F2',
          light: '#F2F2F2'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
