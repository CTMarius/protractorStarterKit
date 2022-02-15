import {Given, Then} from "cucumber";
import {browser} from 'protractor/built';
import {by, element, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');
import pageActions = require("../pageActions/pageactions");

let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);
let mainPage: MainPage = new MainPage();
let pagections: pageActions = new pageActions();

Given(/^I navigate to the main page and I choose my region '(.*)'$/, async (region) => {
    await browser.get(browser.baseUrl);
    await mainPage.countryModal.isPresent();
    await pagections.countryChoose(region);
    await mainPage.acceptTrackingButton.click();
});

Then(/^from the '(.*)' module, click '(.*)'$/, async (module, item) => {
    let moduleElem = element(by.xpath('//div[contains(.,"' + module + '")]'));
    let itemElem = moduleElem.element(by.xpath('//p[contains(.,"' + item + '")]'))
    await browser.wait(ExpectedConditions.elementToBeClickable(itemElem), 30000);
    await itemElem.click();
});

