import {Given, When} from "cucumber";
import {browser} from 'protractor/built';
import {by, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');
import SearchResults = require('../pageElements/searchResultsElements');
import PageActions = require('../pageActions/pageactions');

let mainPage: MainPage = new MainPage();
let searchResults: SearchResults = new SearchResults();
let pagections: PageActions = new PageActions();


Given(/^I navigate to the main page and I choose the region: '(.*)'$/, async (region) => {
    await browser.get(browser.baseUrl);
    if (await mainPage.countryModal.isPresent()) {
        await pagections.countryChoose(region);
        await mainPage.acceptTrackingButton.click();
    }
});

When(/^In the main page, I search for the '(.*)' activity and select the product called '(.*)'$/, async (keyword, productName) => {
    await mainPage.searchField.isPresent();
    await mainPage.searchField.click();
    await mainPage.searchField.sendKeys(keyword);
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(searchResults.searchResultsContainer), 30000);
    await browser.executeScript("arguments[0].click();", searchResults.productSuggestion.element(by.xpath('//span[contains(.,"' + productName + '")]')).getWebElement());
    let urlContent = productName.toLowerCase().replace(" ", "-");
    if (browser.driver.wait(ExpectedConditions.elementToBeClickable(mainPage.signUpdiscountModal), 30000)) {
        await mainPage.signUpdiscountModal.click();
    }
    await browser.driver.wait(ExpectedConditions.urlContains(browser.baseUrl + urlContent), 30000);
});

When(/^In the main page, I search for the '(.*)' activity and select the first product$/, async (keyword) => {
    await mainPage.searchField.isPresent();
    await mainPage.searchField.click();
    await mainPage.searchField.sendKeys(keyword);
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(searchResults.searchResultsContainer), 30000);
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(searchResults.productSuggestion), 30000);
    await searchResults.productSuggestion.element(by.xpath('//span[@class[contains(.,"product-name")]][1]')).getAttribute('innerText').then(async (text) => {
        await browser.executeScript("arguments[0].click();", searchResults.productSuggestion.element(by.xpath('//span[@class[contains(.,"product-name")]][1]')).getWebElement());
        if (browser.driver.wait(ExpectedConditions.elementToBeClickable(mainPage.signUpdiscountModal), 30000)) {
            await mainPage.signUpdiscountModal.click();
        }
        await browser.driver.wait(ExpectedConditions.textToBePresentInElement(searchResults.productNameHeader, text), 30000);
    });
});