/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: {
        400: '#29F3C3',
        500: '#29A285',
        600: '#279178',
        700: '#27846E',
      },
      dark: '#272727',
    },
  },
  plugins: [],
}
