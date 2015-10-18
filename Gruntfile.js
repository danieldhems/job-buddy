module.exports = function(grunt){
	grunt.initConfig({
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: [
					'*.html'
				]
			},
			js: {
				files: [
					'js/**/*.js'
				],
				tasks: [
					'babel'
				]
			},
			files: [
				'**/*.{html,js}'
			]
		},
		connect: {
			server: {
				options: {
					livereload: true,
					open: true
				}
			}
		},
		babel: {
			dist: {
				files: {
					'dist/app.js':'js/app.js'
				}
			}
		}
	})

	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['connect','watch']);
}