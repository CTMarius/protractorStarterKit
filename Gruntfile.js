'use strict';

module.exports = function (grunt) {
    var shell = require('shelljs');
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            options: {
                // Location of your protractor config file
                configFile: './conf.js',

                // Do you want the output to use fun colors?
                noColor: false,

                // Set to true if you would like to use the Protractor command line debugging tool
                //debug: true,

                // Additional arguments that are passed to the webdriver command
                args: {
                    includeStackTrace: true,
                    verbose :true
                }
            },
            e2e: {
                options: {
                    keepAlive: true
                    //args: { baseUrl: 'http://localhost:8080/' }
                }
            }
        }
    });
    grunt.registerTask('installselenium', [
        shell.exec('webdriver-manager update'),
        shell.exec('webdriver-manager start')
    ]);

    grunt.registerTask('e2e', [
        'installselenium',
        'protractor:e2e'
    ]);

};