/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      screens: {
        lg: '1180px'
        // => @media (min-width: 992px) { ... }
      }
    }
  }
};
