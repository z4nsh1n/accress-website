'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        less: {
            options: {
                compress: false
            },
            dev: {
                files: {
                    'app/css/main.css': 'app/css/main.less'
                },
                options: {
                    compress: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapFilename: 'app/css/main.css.map',
                    sourceMapURL: '/css/main.css.map',
                    sourceMapRootpath: '/'
                }
            },
			prod: {
				files: {
					'app/css/main.css': 'app/css/main.less'
				},
				options: {
                    compress: false,
					compress: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapFilename: 'app/css/main.css.map',
					sourceMapURL: '/css/main.css.map',
					sourceMapRootpath: '/'
				}
			}
        },

        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'dist'
            }
        },

        //concat: {
        //    options: {
        //        sourceMap: true
        //    }
        //},
        //
        //uglify: {
        //    options: {
        //        sourceMap: true,
        //        sourceMapIncludeSources: true
        //    }
        //},

        usemin: {
            html: ['dist/*.html']
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        src: 'app/*.html',
                        flatten: true,
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['app/css/main.css', 'app/css/main.css.map'],
                        dest: 'dist/css/'
                    },
					{
						expand: true,
						dot: true,
						cwd: 'app/fonts/',
						dest: 'dist/fonts/',
						src: ['*']
					},
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/fonts/',
                        dest: 'dist/fonts/',
                        src: ['*']
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome/fonts/',
                        dest: 'dist/fonts/',
                        src: ['*']
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'app/images/',
                        dest: 'dist/images/',
                        src: ['*']
                    }
                ]
            }
        },

        replace: {
            css: {
                src: ['dist/css/*.css'],             // source files array (supports minimatch)
                overwrite: true,
                replacements: [{
                    from: '../../bower_components/bootstrap/',                   // string replacement
                    to: '../'
                },
                {
                    from: '../../bower_components/font-awesome/',                   // string replacement
                    to: '../'
                }]
            }
        },

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10']
			},

			'main': {
				src: 'app/css/main.css',
				dest: 'app/css/main.css',
				options: {
					map: {
						prev: 'app/css/',
						inline: false
					}
				}
			}
		},

        watch: {
            options: {
                nospawn: true
            },

            less: {
                files: ['app/css/**/*.less'],
                tasks: ['compile']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-text-replace');

    //alias for watch
    grunt.registerTask('dev', ['watch']);

    //build for the first time
    grunt.registerTask('compile', ['less:dev', 'autoprefixer:main']);

    // simple build task
    grunt.registerTask('build', [
        'less:prod',
		'autoprefixer:main',
        'copy:dist',
        'useminPrepare',
        'concat',
        'uglify',
        //'cssmin',
        'usemin',
        'replace'
    ]);
};