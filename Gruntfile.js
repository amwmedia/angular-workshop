// Generated on 2014-01-10 using generator-angular 0.7.1
'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // define project-specific settings (grunt templates)
        ng: {
            app: 'app',
            temp: '.tmp'
        },

        // empty folders to start fresh
        clean: {
            dev: '<%= ng.temp %>'
        },

        // process compass
        compass: {
            options: {
                sassDir: '<%= ng.app %>/scss',
                cssDir: '<%= ng.app %>/css',
                noLineComments: false
            },
            dev: {
                options: {
                    debugInfo: true
                }
            }
        },

        // start static web server
        connect: {
            options: {
                hostname: 'localhost',
                port: 9000,
                livereload: 35729
            },
            dev: {
                options: {
                    open: true,
                    base: [
                        '<%= ng.temp %>',
                        '<%= ng.app %>'
                    ]
                }
            }
        },

        // watch files for changes and run tasks based on the changed files
        watch: {
            options: {
                spawn: false,
                livereload: true
            },

            // reload the browser when changes are made
            livereload: {
                files: [
                    '<%= ng.app %>/**/*.html',
                    '<%= ng.app %>/**/*.css',
                    '<%= ng.app %>/**/*.js'
                ]
            },

            // compile CSS when Sass files are changed
            compass: {
                files: ['<%= ng.app %>/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            }
        }
    });

    // run development instance
    grunt.registerTask('dev', function (target) {
        
        grunt.task.run([
            'clear',
            'clean:dev',
            'connect:dev',
            'watch'
        ]);
    });
};
