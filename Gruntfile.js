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
                    keepAlive: true,
                    args: { baseUrl: 'http://localhost:4444/' }
                }
            }
        }
    });
    grunt.task.registerTask('installselenium',
        function(){
            return shell.exec('node node_modules\\protractor\\bin\\webdriver-manager update')
        });

    grunt.registerTask('e2e', [
        'installselenium',
        'protractor:e2e'
    ]);

};