/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'tokyo-night-foreground-indigo': '#16161e',
        'tokyo-night-light-foreground-indigo': '#1e202e',
        'tokyo-night-background-indigo': '#1a1b26'
        }
      }
    },
}

