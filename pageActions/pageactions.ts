import MainPage = require('../pageElements/mainPageElements');
import Delivery = require('../pageElements/deliveryPageElements');

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

    public async fillBillingInfo(row) {
        await delivery.firstNameField.click();
        await delivery.firstNameField.sendKeys(row.FirstName);
        await delivery.lastNameField.click();
        await delivery.lastNameField.sendKeys(row.LastName);
        await delivery.addressField.click();
        await delivery.addressField.sendKeys(row.Address);
        await delivery.townField.click();
        await delivery.townField.sendKeys(row.City);
        await delivery.postCodeField.click();
        await delivery.postCodeField.sendKeys(row.PostCode);
        await delivery.emailField.click();
        await delivery.emailField.sendKeys(row.Email);
    }
}

export = pageActions;