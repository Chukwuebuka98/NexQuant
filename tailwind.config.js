/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: {
          light: "#121212",
          dark: "#0E0E10",
          black: "#0B0B0C",
        },
        customPurple: {
          light: "#b171f2",
          dark: "#A357F0",
          purple: "#8223e1",
        },
      },
    },
  },
  plugins: [],
};
