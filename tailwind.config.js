/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: '320px', max: '425px' },
        tablet: { min: '426px', max: '768px' },
        laptop: { min: '769px', max: '1024px' },
        desktop: { min: '1025px', max: '1440px' }
      }
    },
  },
  plugins: [],
}
