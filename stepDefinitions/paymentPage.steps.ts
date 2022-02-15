import {When} from "cucumber";
import {browser} from 'protractor/built';
import {ExpectedConditions} from "protractor";
import Payment = require('../pageElements/paymentPageElements');

let {setDefaultTimeout} = require('cucumber');
let payment: Payment = new Payment();

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

When(/^In the payment page, I expect to have the following payment methods available$/, async (data) => {
    let rows = data.hashes();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'payment'), 30000);
    for (let i = 0; i <= rows.length; i++) {
        await browser.wait(ExpectedConditions.textToBePresentInElement(payment.paymentMethodLabel, rows[i]), 30000);
    }
});
