module.exports = function(grunt){
	grunt.initConfig({
		config: {
			client_dir: 'client/'
		},
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
					'client/js/src/**/*.js'
				],
				tasks: [
					'browserify'
				]
			},
			bower: {
				files: ['bower_components'],
				tasks: ['wiredep']
			}
		},
		browserify: {
			dev: {
				files: {
					'client/js/app.js': [
						'client/js/src/roles/role.js',
						'client/js/src/router.js',
						'client/js/src/app.js'
					]
				}
			}
		},
		wiredep: {
			js: {
				src: ["client/index.html"]
			}
		},
		grunt: {
			files: ['Gruntfile.js']
		}
	})

	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['connect','watch']);
}