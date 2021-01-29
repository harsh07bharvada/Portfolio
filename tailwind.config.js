const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      }
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
