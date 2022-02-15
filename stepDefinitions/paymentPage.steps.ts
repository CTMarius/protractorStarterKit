import {When} from "cucumber";
import {browser} from 'protractor/built';
import {by, element, ExpectedConditions} from "protractor";

let {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

When(/^In the payment page, I expect to have the following payment methods available$/, async (data) => {
    let rows = data.hashes();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'payment'), 30000);
    for (let i = 0; i < rows.length; i++) {
        let paymentOption = rows[i].PaymentMethod.toString();
        await ExpectedConditions.elementToBeClickable(element(by.xpath("//input[@value='" + paymentOption + "']")));
    }
});
