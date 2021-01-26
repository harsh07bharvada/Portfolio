const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  purge: {
    enabled: true,
    content: [
      '**/*.html',
      '**/*.ts',
    ]
  },
  darkMode: "media",
  theme: {

    gradientColorStops: theme => ({
      ...theme('colors'),
      'lightPink': '#F472B6',
      'lightOrange': '#FB7185',
     }),
    extend: {
      colors: {
        gray: colors.coolGray,
        pink: colors.pink,
        orange: colors.orange,
        teal: colors.teal,
        lightPink: '#F472B6',
        lightOrange: '#FB7185',
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
