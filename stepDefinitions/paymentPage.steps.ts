import {When} from "cucumber";
import {browser} from 'protractor/built';
import {by, element, ExpectedConditions} from "protractor";

When(/^In the payment page, I expect to have the following payment methods available$/, async (data) => {
    let rows = data.hashes();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'payment'), 30000);
    for (let i = 0; i < rows.length; i++) {
        let paymentOption = rows[i].PaymentMethod.toString();
        await browser.wait(element(by.xpath("//input[@value='" + paymentOption + "']")).isDisplayed(), 30000);
    }
});
