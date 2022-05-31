const colors = require('tailwindcss/colors')

module.exports = {
  purge:['./**/*{html,ts,tsx}'],
  content: [],
  theme: {
    extend: {},
    color:{
      ...colors
    }
  },
  plugins: [
  ],
}
