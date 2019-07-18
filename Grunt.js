'use strict';
var shell = require('shelljs');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            options: {
                // Location of your protractor config file
                configFile: 'protractor.conf.js',

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

    grunt.registerTask('installSelenium', [
        'installSelenium', function() {
            shell.exec('npm install selenium-webdriver');
        }
    ]);

    grunt.registerTask('e2e', [
        'installSelenium',
        'protractor:e2e'
    ]);



};