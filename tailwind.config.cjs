/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {  
        transparent: 'transparent',
        current:'currentColor',
        lenssisSky: '#abc8df',
        lenssisDeepSky: '#92c8ed',
        lenssisDark: '#1B304A',
        lenssisGray: '#7a7a7a',
        lenssisDeepGray:'#5a5a5a'
      },
      fontFamily:{
        
      },
      keyframes: {
        toast: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        drop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' }
        }
      },
      animation: {
        toast: 'toast .6s ease-in-out',
        drop: 'drop .6s ease-in-out'
      }
    },
    screens: {
      xs: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },

    
  },
  plugins: []
}
