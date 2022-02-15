import {When} from "cucumber";
import {browser} from 'protractor/built';
import {by, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');

let mainPage: MainPage = new MainPage();
let {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

When(/^In the product details page, I select the size '(.*)' and add the product '(.*)' to my bag$/, async (size, product) => {
    await mainPage.sizeSelectionArea.isPresent();
    await mainPage.sizeSelectionArea.element(by.xpath("//button/span[text() = '" + size + "']")).click();
    await mainPage.addToBagButton.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(mainPage.addedToBagModal), 30000);
    await ExpectedConditions.textToBePresentInElement(mainPage.addedToBagModal, product);
    await ExpectedConditions.textToBePresentInElement(mainPage.addedToBagModal.element(by.xpath("//div[@class[contains(.,'order-summary')]]")), "1")

});

When(/^In the product details page, view bag modal, I click on the View Bag button and navigate to the chart$/, async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(mainPage.viewBagButton), 30000);
    await mainPage.viewBagButton.click();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'cart'), 30000);
});