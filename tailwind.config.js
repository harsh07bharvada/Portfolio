const colors = require('tailwindcss/colors')

module.exports = (isProd) => ({
  prefix: '',
  purge: {
    enabled: isProd,
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
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
});
