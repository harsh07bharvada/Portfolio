const tailwindConfig = require("./tailwind.config.js")
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss')(tailwindConfig),
              require('autoprefixer'),
            ],
          },
        },
      },
    ],
  },
};
