import { Given, When, Then } from "cucumber";
import { browser } from 'protractor/built';
import * as pageActions from '../pageActions/pageActions';

Given(/^I navigate to the main page$/, async () => {
    await browser.get(browser.baseUrl);
});

When(/^In the main page, I type the (.*) in the text field$/, async (keyword: string) => {
    await pageActions.typeInTextField(keyword);
});

When(/^In the main page, I clear the text field$/, async () => {
    await pageActions.clearTextField();
});

Then(/^In the main page, the save button is (.*)$/, async (status: string) => {
    await pageActions.checkStatus(status);
});

When(/^In the main page, I click on the save button$/, async () => {
    await pageActions.saveText();
});

When(/^In the main page, I select the following date (.*)$/, async (date: string) => {
    await pageActions.selectDate(date);
});

Then(/^In the main page, the text field contains (.*)$/, async (keyword: string) => {
    await pageActions.assertTextFieldContent(keyword);
});
