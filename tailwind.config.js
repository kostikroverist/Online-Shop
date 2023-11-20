/** @type {import('tailwindcss').Config} */
export default {
  content: ["./head", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: 'rgba(100, 140, 169, 0.70)',
      },
    },
  },
  plugins: [],
}

