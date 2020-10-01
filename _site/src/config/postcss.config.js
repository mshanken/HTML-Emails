let path = require('path');

module.exports = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
    /*require('postcss-import')({
      plugins: [
        require('stylelint')(path.resolve(__dirname, './.stylelintrc'))
      ]
    }),*/
    require('stylelint')({
      configFile: path.resolve(__dirname, './.stylelintrc')
    }),
    require('tailwindcss')(path.resolve(__dirname, './tailwind.config.js')),
    require('postcss-preset-env')({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true
      }
    })
  ],
}
/*module.exports = {
    plugins: {
        autoprefixer: {}
    }
}*/

