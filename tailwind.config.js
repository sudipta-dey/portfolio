const { purge } = require('tailwindcss/stubs/defaultConfig.stub');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class', // optional for dark mode
  plugins: [],
  purge: false,
};