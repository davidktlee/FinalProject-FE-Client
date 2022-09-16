/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
    }
  },
  plugins: []
}
