import {When} from "cucumber";
import {browser} from 'protractor/built';
import {by, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');
import SearchResults = require('../pageElements/searchResultsElements');

let mainPage: MainPage = new MainPage();
let searchResults: SearchResults = new SearchResults();

When(/^In the main page, I search for the '(.*)' activity and select the product called '(.*)'$/, async (keyword, productName) => {
    await mainPage.searchField.isPresent();
    await mainPage.searchField.click();
    await mainPage.searchField.sendKeys(keyword);
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(searchResults.searchResultsContainer), 30000);
    await browser.executeScript("arguments[0].click();", searchResults.productSuggestion.element(by.xpath('//span[contains(.,"' + productName + '")]')).getWebElement());
    let urlContent = productName.toLowerCase().replace(" ", "-");
    await browser.driver.wait(ExpectedConditions.urlContains(browser.baseUrl + urlContent), 30000);
    if (browser.driver.wait(ExpectedConditions.elementToBeClickable(mainPage.signUpdiscountModal), 30000)) {
        await mainPage.signUpdiscountModal.click();
    }
});