'use strict';

module.exports = {
  development: {
    options: {
      compress: true,
      yuicompress: true,
      optimization: 2
    },
    files: {
      "<%= prod.style %>/wso.min.css": "<%= prod.style %>/wso.less"
    }
  }
};