/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        marineblue: '#02295a',
        purplishblue: 'hsl(243, 100%, 62%)',
        pastelblue: 'hsl(228, 100%, 84%)',
        lightblue: 'hsl(206, 94%, 87%)',
        strawberryred: 'hsl(354, 84%, 57%)',
        coolgray: 'hsl(231, 11%, 63%)',
        lightgray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}