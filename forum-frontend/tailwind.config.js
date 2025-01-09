/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D6EFD',
        'primary-dark': '#084298',
        'primary-light': '#B3D4FC',
        secondary: '#6C757D',
        'gray-dark': '#343A40',
        'gray-light': '#F8F9FA',
      },
      spacing: {
        '5': '1.25rem',
        '7': '1.75rem',
        '15': '3.75rem',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
