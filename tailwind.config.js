/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'body': "Raleway, sans-serif",
      'header': "Lato, sans-serif",
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%, rgba(0, 0, 0, 0.85) 94.01%)',
    },
    minWidth: {
      '50': '50%'
    },
    extend: {
    },
  },
  plugins: [],
};
