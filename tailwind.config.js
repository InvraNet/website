const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'linkhov': '#d8d8d8',
        'header': '#16161e',
        'songinf': '#e0dede',
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      margin: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      rounded: {
        'full': '9999px' 
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      opacity: {
        '75': '.75',
        '20': '.20',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['hover', 'focus'],
    },
  },
  plugins: [],
}
