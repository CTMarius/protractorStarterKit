'use strict';

module.exports = function (grunt) {
    var shell = require('shelljs');
	var os = require('os');
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            e2e: {
                options: {
                    configFile: 'protractorConf.js',
                    keepAlive: true,
                    args: { baseUrl:  grunt.option('baseUrl') }
                }
            }
        }
    });

    grunt.task.registerTask('installselenium',
      function(){		  
            return shell.exec("node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update")        
	 })
    
    grunt.registerTask('e2e', [
        'installselenium',
        'protractor:e2e'
    ]);

};
