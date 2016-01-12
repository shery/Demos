'use strict'
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

  	var lrPort = 35729;
  	var lrSnippet = require('connect-livereload')({ port: lrPort });
	var serveStatic = require('serve-static');
	var serveIndex = require('serve-index');
	var lrMiddleware = function(connect, options, middlwares) {
  		return [
  			lrSnippet,
		    serveStatic(options.base[0]),
		    serveIndex(options.base[0]),
		];
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	    connect: {
	    	options: {
	        	port: 8000,
	        	open: true,
	        	livereload: lrPort,
	        	hostname: 'localhost',
	        	base: ['app'],
	      	},
	      	livereload: {
	        	options: {
	          		middleware: lrMiddleware,
	        	}
	      	}
	    },

	    watch: {
	      	livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>',
				},
				files: [
					'app/*.html',
          			'app/css/{,*/}*.css',
          			'app/js/{,*/}*.js',
          			'app/images/{,*/}*.{png,jpg}'
				],
			},
	    }
	});

	grunt.registerTask('serve',['connect','watch']);
};