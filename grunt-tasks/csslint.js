'use strict';

module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  src: ['<%= prod.style %>/**/*.css', '<%= prod.style %>/**/*.min.css']
}