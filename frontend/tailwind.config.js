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
  fontFamily: {
    fontBlack: ['black', 'sans-serif'], 
    fontBold: ['bold', 'sans-serif'], 
    fontExtrabold: ['extrabold', 'sans-serif'], 
    fontExtralight: ['extralight', 'sans-serif'],
    fontLight: ['light', 'sans-serif'],
    fontMedium: ['medium', 'sans-serif'], 
    fontRegular: ['regular', 'sans-serif'], 
    fontSemibold: ['semibold', 'sans-serif'], 
    fontThin: ['thin', 'sans-serif'], 
},
  plugins: [],
}

