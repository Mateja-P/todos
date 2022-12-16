/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        primary: '#CC4D2E',
        hr: '#CBCBCB',
        background: '#F5F5F5',
        lightText: '#929191',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
