/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#eaf0f4',
        'background': '#0a1116',
        'primary': '#9ec3dc',
        'secondary': '#255a7f',
        'accent': '#4d9ed7',
       },
    },
  },
  plugins: [],
}