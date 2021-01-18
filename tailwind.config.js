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
    extend: {
      colors: {
        gray: colors.coolGray
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
