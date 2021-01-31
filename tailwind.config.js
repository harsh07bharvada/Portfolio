const colors = require('tailwindcss/colors');
module.exports = {
  prefix: '',
  purge: {
    enabled:true,
    content: [
      '**/*.html',
      '**/*.ts',
    ]
  },
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'bounceX': 'bounceX 1s linear infinite',
      },
      keyframes: {
        bounceX: {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        }
      },
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
