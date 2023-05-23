/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{styles}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      DEFAULT: "#272727",
      black: "#272727",
      bgrey: "#DBDBDB",
      bblue: "#4074C1"
    },
    screens: {
      sm: '480',
      md: '728px',
      lg: '984px',
      xl: '1240px',
    },
  },
  gridTemplateColumns: {
    '12': 'repeat(12, minmax(0, 1fr))',
  }
};
