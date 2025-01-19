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
        gray2: '#E1CCCF',
        pink1: '#FFF0F2',
        pink2: '#E7C1C6',
        pink3: '#D89CA4',
        pink4: '#FFF5F6',
        pink5: '#CF969D',
        pink6: '#FFECEF',
        pink7: '#FFF7F8',
        pink8: '#E7ACB4',
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

