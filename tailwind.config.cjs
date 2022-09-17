/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
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
    }
  },
  plugins: []
}
