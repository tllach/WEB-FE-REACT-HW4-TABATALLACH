/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Handjet: ['Handjet', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

