const {browser} = require("protractor");
require('ts-node').register({project: 'tsconfig.json'});
exports.config = {

    directConnect: false,

    specs: [
        'features/*.feature',
    ],
  
    multiCapabilities: [{
  'browserName': 'firefox'
        }, {
  'browserName': 'chrome',
        'chromeOptions': {
            'args: [
                'start-maximized',
                '--disk-cache-size= 0'
            ],
        }',
        shardTestFiles: true,
        maxInstances: 2
}]

    framework: 'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['stepDefinitions/*.steps.ts', "support/*.ts"],
        tags: true,
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
