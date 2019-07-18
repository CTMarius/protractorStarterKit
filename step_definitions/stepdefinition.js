var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
var home = require('./../pages/pageObjects.js');

chai.use(chaiAsPromised);

defineSupportCode(function ({And, But, Given, Then, When}) {
    Then(/^I expect to see "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });

    When(/^I click on the "([^"]*)" button$/, function (arg1, callback) {
       return home.elemOne.isPresent().then(function () {
            return home.elemOne.click();
       })
    });

    When(/^I login into the application$/, function (callback) {
        callback.pending();
    });
    Given(/^I navigate to the login page$/, function (callback) {
        callback.pending();
    });
});