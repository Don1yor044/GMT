/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',  // Define `xs` as needed
      },
      screens: {
        mp: '275px',  // Define `mp` as needed
      },
    },
  },
  plugins: [],
}

