'use strict';

module.exports = {
  js: {
    src: [
      'www/js/vendor/*.js',
      '!www/js/vendor/modernizr.js',
      '!www/js/vendor/require.js'
    ],
    dest: 'www/js/main.js'
  },
  css: {
    src: [
      'www/css/vendor/bootstrap.js',
      'www/css/theme.js'
    ],
    dest: 'web/js/build-main.min.js'
  }
} ;