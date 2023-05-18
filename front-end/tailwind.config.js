/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackColor': '#272343',
        'whiteColor': '#FFFFFF',
        'grayColor': '#D9D9D9',
        'lightGreenColor': '#E3F6F5',
        'darkGreenColor': '#BAE8E8',
      },
    },
  },
  plugins: [],
}

