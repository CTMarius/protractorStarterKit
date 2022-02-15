import {Then} from "cucumber";
import {browser} from 'protractor/built';
import {by, element, ExpectedConditions} from "protractor";
import MainPage = require('../pageElements/mainPageElements');
import pageActions = require("../pageActions/pageactions");

let mainPage: MainPage = new MainPage();
let pagections: pageActions = new pageActions();

Then(/^from the '(.*)' module, click '(.*)'$/, async (module, item) => {
    let moduleElem = element(by.xpath('//div[contains(.,"' + module + '")]'));
    let itemElem = moduleElem.element(by.xpath('//p[contains(.,"' + item + '")]'))
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(itemElem), 30000);
    await itemElem.click();
});


