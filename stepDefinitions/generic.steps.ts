import {Then} from "cucumber";
import {browser} from 'protractor/built';
import {by, element, ExpectedConditions} from "protractor";

let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

Then(/^from the '(.*)' module, click '(.*)'$/, async (module, item) => {
    let moduleElem = element(by.xpath('//div[contains(.,"' + module + '")]'));
    let itemElem = moduleElem.element(by.xpath('//p[contains(.,"' + item + '")]'))
    await browser.wait(ExpectedConditions.elementToBeClickable(itemElem), 30000);
    await itemElem.click();
});


