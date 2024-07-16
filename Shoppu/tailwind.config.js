/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#69F0AE',
        'custom-black': '#191C1F',
        'my-gray': '#37474F',
        'gray': '#303639',
        'custom-gray': '#37474f62',
      },
      borderWidth: {
        '0.3': '0.3px',
        '0.2': '0.2px',
      },
      height: {
        '379': '379px',
      },
    },
  },
  plugins: [],
}
