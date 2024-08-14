/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '98': '360px',
        '86p':"86%",
        '94p':"94%",
        '70p':'70%',
        '350':"330px",
      },
      borderWidth: {
        't-1': '1px', // Custom border-top width of 1px
      },
      colors: {
        borderCol: '#192038',
        textCol:'#c5cee0',
      },
    },
  },
  plugins: [],
}
