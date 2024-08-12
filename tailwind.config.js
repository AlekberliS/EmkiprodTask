/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '98': '360px',
        
      },
      borderWidth: {
        't-1': '1px', // Custom border-top width of 1px
      },
      colors: {
        borderCol: '#192038',
      },
    },
  },
  plugins: [],
}
