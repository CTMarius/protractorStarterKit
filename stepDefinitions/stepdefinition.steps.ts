import {Given, When} from "cucumber";
import {browser} from 'protractor/built';
import {by, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');
import SearchResults = require('../pageElements/searchResultsElements');
import Delivery = require('../pageElements/deliveryPageElements');

let mainPage: MainPage = new MainPage();
let searchResults: SearchResults = new SearchResults();
let delivery: Delivery = new Delivery();
let {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

Given(/^I navigate to the main page and I choose my region '(.*)'$/, async (region) => {
    await browser.get(browser.baseUrl);
    await mainPage.countryModal.isPresent();
    if (region == 'GB') {
        await mainPage.countryOptionGB.click();
        await mainPage.goButton.click();
        await mainPage.acceptTrackingButton.click();
    } else if (region == 'NL') {
        await mainPage.countryOptionNL.click();
        await mainPage.goButton.click();
        await mainPage.acceptTrackingButton.click();
    }
});

When(/^I search for the '(.*)' activity and select the product called '(.*)'$/, async (keyword, productName) => {
    await mainPage.searchField.isPresent();
    await mainPage.searchField.click();
    await mainPage.searchField.sendKeys(keyword);
    await browser.wait(ExpectedConditions.elementToBeClickable(searchResults.searchResultsContainer), 30000);
    await browser.executeScript("arguments[0].click();", searchResults.productSuggestion.element(by.xpath('//span[contains(.,"' + productName + '")]')).getWebElement());
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + productName.toLowerCase().replace(" ", "-")), 30000);
    if (browser.wait(ExpectedConditions.elementToBeClickable(mainPage.signUpdiscountModal), 30000)) {
        await mainPage.signUpdiscountModal.click();
    }
});

When(/^I select the size '(.*)' and add the product '(.*)' to my bag$/, async (size, product) => {
    await mainPage.sizeSelectionArea.isPresent();
    await mainPage.sizeSelectionArea.element(by.xpath("//button/span[text() = " + size + "]")).click();
    await mainPage.addToBagButton.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(mainPage.addedToBagModal), 30000);
    await ExpectedConditions.textToBePresentInElement(mainPage.addedToBagModal, product);
    await ExpectedConditions.textToBePresentInElement(mainPage.addedToBagModal.element(by.xpath("//div[@class[contains(.,'order-summary')]]")), "1")

});

When(/^I click on the View Bag button and navigate to the chart$/, async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(mainPage.viewBagButton), 30000);
    await mainPage.viewBagButton.click();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'cart'), 30000);
});

When(/^In the chart page I proceed to checkout$/, async () => {
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'cart'), 30000);
    await browser.wait(ExpectedConditions.elementToBeClickable(mainPage.checkoutBottomButton), 30000);
    await mainPage.checkoutBottomButton.click();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'delivery'), 30000);
    await browser.wait(ExpectedConditions.visibilityOf(delivery.shippingAdressHeading), 30000);
});


