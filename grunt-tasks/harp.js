'use strict';

module.exports = {
  server: {
  	server: true,
  	source: '<%= config.prod.root %>'
  },
  staticserver: {
    server:true,
    source: '<%= config.prod.root %>',
    port: 8800
  },
  dist: {
    source: '<%= config.prod.root %>',
    dest: '<%= config.dev.root %>'
  },
  ghpages: {
    source: '<%= config.prod.root %>',
    dest: './'
  }
};