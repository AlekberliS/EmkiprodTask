/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'euclid': ['"Euclid Circular A"', 'sans-serif']
      },
      
    },


    extend: {
      width: {
        '98': '360px',
        '86p':"86%",
        '94p':"94%",
        '70p':'70%',
        '350':"330px",
        '90p':'90%',
      },
      borderWidth: {
        't-1': '1px', 
      },
      colors: {
        borderCol: '#192038',
        textCol:'#c5cee0',
      },
      text
    },
  },
  plugins: [],
}

