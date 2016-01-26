'use strict';

module.exports = {
  js: {
    src: [
      '<%= config.prod.script %>/vendor/*.js',
      '!<%= config.prod.script %>/vendor/modernizr.js'
    ],
    dest: '<%= config.prod.script %>/build.min.js'
  },
  css: {
    src: [
      '<%= config.prod.style %>/vendor/bootstrap.css',
      '<%= config.prod.style %>/theme.css'
    ],
    dest: '<%= config.prod.style %>/build.min.css'
  }
} ;