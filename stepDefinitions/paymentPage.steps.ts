import {When} from "cucumber";
import {browser} from 'protractor/built';
import {ExpectedConditions} from "protractor";

let {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

When(/^In the payment page, I expect to have the following payment methods available$/, async () => {
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'cart'), 30000);

});
