import {When} from "cucumber";
import {browser} from 'protractor/built';
import {ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');
import Delivery = require('../pageElements/deliveryPageElements');

let mainPage: MainPage = new MainPage();
let delivery: Delivery = new Delivery();

When(/^In the chart page, I proceed to checkout$/, async () => {
    await browser.driver.wait(ExpectedConditions.urlContains(browser.baseUrl + 'cart'), 30000);
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(mainPage.checkoutBottomButton), 30000);
    await mainPage.checkoutBottomButton.click();
    await browser.driver.wait(ExpectedConditions.urlContains(browser.baseUrl + 'delivery'), 30000);
    await browser.driver.wait(ExpectedConditions.visibilityOf(delivery.shippingAdressHeading), 30000);
});
