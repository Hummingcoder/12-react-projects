/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        showOn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        showOn: "showOn 0.5s ease-in-out forwards",
        slideDown: "slideDown 0.5s forwards",
      },
    },
  },
  plugins: [],
};
