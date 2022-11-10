import MainPage = require('../pageElements/mainPageElements');
import { expect } from 'chai'

let mainPage: MainPage = new MainPage();


class pageActions {

    public async typeInTextField(keyword: string) {
        await mainPage.textField.isPresent();
        await mainPage.textField.click();
        await mainPage.textField.sendKeys(keyword);
    }

    public async clearTextField() {
        await mainPage.textField.isPresent();
        await mainPage.textField.clear();
    }
    
    public async saveText() {
        await mainPage.saveButton.isPresent();
        await mainPage.saveButton.isEnabled();
        await mainPage.saveButton.click();
    }

    public async checkStatus(status: string) {
        await mainPage.saveButton.isDisplayed();
        if (status == 'enabled') {
            await expect(await mainPage.saveButton.isEnabled()).to.be.true;
        } else if (status == 'disabled') {
            await expect(await mainPage.saveButton.isEnabled()).to.be.false;
        } else {
            await expect(status).to.be.oneOf(['enabled', 'disabled'])
        }
    }

}

export = pageActions;