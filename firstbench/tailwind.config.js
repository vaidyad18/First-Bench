/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        1: '100%',
        7: '70%',
      }
    },
  },
  plugins: [],
}

