import MainPage = require('../pageElements/mainPageElements');
import Delivery = require('../pageElements/deliveryPageElements');
import {ExpectedConditions} from "protractor";

let mainPage: MainPage = new MainPage();
let delivery: Delivery = new Delivery();

class pageActions {
    public async countryChoose(countryCode) {
        if (countryCode == 'GB') {
            await mainPage.countryOptionGB.click();
            await mainPage.goButton.click();
        } else if (countryCode == 'NL') {
            await mainPage.countryOptionNL.click();
            await mainPage.goButton.click();
        }
    }

    public fillTextFieldWithValidation(textField, textValue) {
        return textField.click().then(() => {
            return textField.sendKeys(textValue).then(() => {
                return ExpectedConditions.visibilityOf(delivery.textFieldValidityCheck)
            })
        })
    }

    public async fillBillingInfo(rows) {
        await this.fillTextFieldWithValidation(delivery.firstNameField, rows[0].FirstName);
        await this.fillTextFieldWithValidation(delivery.lastNameField, rows[0].LastName);
        await this.fillTextFieldWithValidation(delivery.addressField, rows[0].Address);
        await this.fillTextFieldWithValidation(delivery.townField, rows[0].City);
        await this.fillTextFieldWithValidation(delivery.postCodeField, rows[0].PostCode);
        await this.fillTextFieldWithValidation(delivery.emailField, rows[0].Email);
    }


}

export = pageActions;