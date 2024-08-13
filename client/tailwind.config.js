/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "dark-blue" : "#0d0764",
        "white" : "#fbfaf8",
        "cream" : "#ebede9",
        "dark-cream" : "#a0aa97",
        "gold" : "#D1A309",
        "light-ivory" : "#FFF7E2",
        "pink-cream" : "#F7F0DA",
        "olive-green" : "#96C980",
        "skin" : "#FFD09F"
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}