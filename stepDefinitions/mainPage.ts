import { Given, When, Then } from "cucumber";
import { browser } from 'protractor/built';
import PageActions = require('../pageActions/pageactions');

let pagections: PageActions = new PageActions();


Given(/^I navigate to the main page$/, async () => {
    await browser.get(browser.baseUrl);
});

When(/^In the main page, I type the (.*) in the text field$/, async (keyword) => {
    await pagections.typeInTextField(keyword);
});

When(/^In the main page, I clear the text field$/, async () => {
    await pagections.clearTextField();
});

Then(/^In the main page, the save button is (.*)$/, async (status) => {
    await pagections.checkStatus(status);
});

When(/^In the main page, I click on the save button'$/, async () => {
    await pagections.saveText();
});
