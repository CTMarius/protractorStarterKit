import {Given, When} from "cucumber";
import {browser} from 'protractor/built';
import {by, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPage');

let mainPage: MainPage = new MainPage();
let {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

Given(/^I navigate to the main page and I choose my region '(.*)'$/, async (region) => {
    await browser.get(browser.baseUrl).then(async () => {
        await mainPage.countryModal.isPresent().then(async () => {
            if (region == 'GB') {
                await mainPage.countryOptionGB.click();
                await mainPage.goButton.click();
                await mainPage.acceptTrackingButton.click();
            } else if (region == 'NL') {
                await mainPage.countryOptionNL.click();
                await mainPage.goButton.click();
                await mainPage.acceptTrackingButton.click();
            }
        })
    })
});

When(/^I search for the '(.*)' activity and select the product called '(.*)'$/, async (keyword, productName) => {
    await mainPage.searchField.isPresent().then(async () => {
        await mainPage.searchField.click();
        await mainPage.searchField.sendKeys(keyword);
        await browser.wait(ExpectedConditions.elementToBeClickable(mainPage.searchResultsContainer), 10000).then(async () => {
            await browser.executeScript("arguments[0].click();", mainPage.productSuggestion.element(by.xpath('//span[contains(.,"' + productName + '")]')).getWebElement());
            await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + productName.toLowerCase().replace(" ", "-")), 30000).then(async () => {
                if (browser.wait(ExpectedConditions.elementToBeClickable(mainPage.signUpdiscountModal), 30000)) {
                    await mainPage.signUpdiscountModal.click();
                }
            });
        });
    });
});



