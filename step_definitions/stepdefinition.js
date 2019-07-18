var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Then(/^I expect to see "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });
    When(/^I click on the "([^"]*)" button$/, function (arg1, callback) {
        callback.pending();
    });
    When(/^I login into the application$/, function (callback) {
        callback.pending();
    });
    Given(/^I navigate to the login page$/, function (callback) {
        callback.pending();
    });
});