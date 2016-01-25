'use strict';

module.exports = {
	all: ['Gruntfile.js', '<%= prod.scripts %>/**/*.js', 'test/**/*.js', 'grunt-tasks/**/*.js','!<%= prod.scripts %>/**/*.min.js']
};