/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

