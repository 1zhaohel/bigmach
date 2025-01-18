/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray1: '#534F4F',
        pink2: '#E7C1C6',
        pink3: '#D89CA4',
        mediumGray: '#534F4F', 

      }
    },
  },
  fontFamily: {
    gotham: ['Gotham', 'sans-serif'], // has italic version 
    gothamBlack: ['Gotham Bold', 'sans-serif'], // for titles?
    gothamThin: ['Gotham Thin', 'sans-serif'],  //  has italic ver
    gothamLight: ['Gotham Light', 'sans-serif'],
    gothamXLight: ['Gotham XLight', 'sans-serif'], // has italic ver
},
  plugins: [],
}

