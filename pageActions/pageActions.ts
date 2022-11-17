import MainPage = require('../pageElements/mainPageElements');
import { expect } from 'chai'
import { protractor } from 'protractor';
import * as fileHandler from '../support/fileHandler';

let mainPage: MainPage = new MainPage();

export async function assertTextFieldContent(keyword: string) {
    await mainPage.textField.isPresent();
    await expect((await mainPage.textField.getAttribute('innerText')).toString(), 'The text field does not include the provided input string: "' + keyword + '"', 'Provided input string is included').to.include(keyword);
}

export async function typeInTextField(keyword: string) {
    await mainPage.textField.isPresent();
    await mainPage.textField.click();
    await mainPage.textField.sendKeys(keyword);
}

export async function clearTextField() {
    await mainPage.textField.isPresent();
    await mainPage.textField.clear();
}

export async function saveText() {
    await mainPage.saveButton.isPresent();
    await mainPage.saveButton.isEnabled();
    await mainPage.saveButton.click();
}

export async function selectDate(date: string) {
    await mainPage.datePicker.isPresent();
    await mainPage.datePicker.isEnabled();
    await mainPage.datePicker.sendKeys(date);
    await mainPage.datePicker.sendKeys(protractor.Key.TAB);
}

export async function checkStatus(status: string) {
    await mainPage.saveButton.isDisplayed();
    if (status == 'enabled') {
        await expect(await mainPage.saveButton.isEnabled(), 'The element is disabled. It should be enabled', 'Element status is enabled').to.be.true;
    } else if (status == 'disabled') {
        await expect(await mainPage.saveButton.isEnabled(), 'The element is enabled. It should be disabled', 'Element status is disabled').to.be.false;
    } else {
        await expect(status).to.be.oneOf(['enabled', 'disabled'], 'Input string should be either enabled or disabled. Please check the correctness of the example in the feature file.')
    }
}

export async function assertJsonFilesAreIdentical(actual: string, expected: string) {
    const compResult = await fileHandler.compareTwoJsonFiles(actual, expected);    
    await expect(compResult).to.be.empty;
}