const {browser} = require("protractor");
require('ts-node').register({project: 'tsconfig.json'});
exports.config = {

    directConnect: false,

    specs: [
        'features/*.feature',
        'async_await.js'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'start-maximized'
            ]
        }
    },

    framework: 'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['stepDefinitions/*.steps.ts', "support/*.ts"],
        format: 'json:.tmp/results.json',
        strict: true
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
};
