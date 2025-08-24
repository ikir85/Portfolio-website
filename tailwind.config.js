/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "501px",
      md: "821px",
      lg: "1201px",
      xl: "2561px",
    },
    extend: {
      flex: {
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
