require('ts-node').register({project: 'tsconfig.json'});
exports.config = {

    directConnect: false,

    specs: [
        'features/*.feature',
        'async_await.js'
    ],

    capabilities: {
        browserName: 'chrome',
       //browserName: 'firefox'
    },

    framework: 'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['step_definitions/*.steps.ts', "support/*.ts"],
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
