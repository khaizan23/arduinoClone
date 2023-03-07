/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,mjs}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#cce6e6",
          200: "#99cdce",
          300: "#66b3b5",
          400: "#339a9d",
          500: "#008184",
          600: "#00676a",
          700: "#004d4f",
          800: "#003435",
          900: "#001a1a",
        },
      },
      screens: {
        xs: "321px",
        "mob-md": "421px",
        "mob-l": "480px",
        "tablet-sm": "680px",
        tablet: "719px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
