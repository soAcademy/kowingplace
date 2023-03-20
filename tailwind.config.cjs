/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "font-primary": "rgb(75 85 99)",
      },
    },
    fontFamily: {
      prompt: ["Prompt, sans-serif"],
    },
  },
  plugins: [],
};
