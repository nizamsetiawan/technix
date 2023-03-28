/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['about.html','blog.html','contact.html','home.html','research.html','home.html'],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif']
      },
      colors : {
        light:'#fff',
        primary:'#f97316',
        danger:'#ef4444',
        secondary:'#c2410c',
        dark:'#4b5563',
        darkkiller:'#1f2937', //800
        darkmedium:'#374151', //700
        soft : '#e2e8f0',
      },
    },
  },
  plugins: [],
}
