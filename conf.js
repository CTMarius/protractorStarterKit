exports.config = {

    directConnect: true,

    specs: [
        './../features/*.feature'
    ],

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: '../step_definitions/*.steps.js',
        tags: '@search',
        format: 'json:.tmp/results.json',
        strict: true
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }]
};