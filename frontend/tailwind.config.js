/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        gray1: '#534F4F',
        pink2: '#E7C1C6',
        pink3: '#D89CA4',
      }
    },
  },
  colors: {
    mediumGray: '#534F4F', 
  },
  fontFamily: {
    gotham: ['Gotham', 'sans-serif'], 
  },
  plugins: [],
}

