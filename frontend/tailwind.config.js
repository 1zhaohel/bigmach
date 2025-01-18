/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
<<<<<<< Updated upstream
    extend: {},
  },
=======
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
    gotham: ['Gotham', 'sans-serif'], // has italic and bold version version 
    gothamBlack: ['Gotham Black', 'sans-serif'], // for titles?
    gothamThin: ['Gotham Thin', 'sans-serif'],  //  has italic ver
    gothamXLight: ['Gotham Light', 'sans-serif'], // no other ver
    gothamXLight: ['Gotham XLight', 'sans-serif'], // has italic ver
    gothamXLight: ['Gotham UltraItalic', 'sans-serif'], // has italic ver


    gothamUltraItalic: ['Gotham UltraItalic', 'sans-serif'], 
},
>>>>>>> Stashed changes
  plugins: [],
}

