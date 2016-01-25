'use strict';

module.exports = {
  main: {
    files: [
	  {src: ['../_site/public/css/**/*.less','../!_site/public/css/bootstrap.less','../!_site/public/css/theme.less'], dest: '../_site/public/css/_*.less'},
	]
  }
};
