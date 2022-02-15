import {When} from "cucumber";
import {browser} from 'protractor/built';
import {ExpectedConditions} from "protractor";
import Delivery = require('../pageElements/deliveryPageElements');
import pageActions = require("../pageActions/pageactions");
import assert = require("assert");

let delivery: Delivery = new Delivery();
let pageactions: pageActions = new pageActions();

When(/^In the delivery page, I search for collection points in '(.*)'$/, async (location) => {
    await browser.wait(ExpectedConditions.elementToBeClickable(delivery.cityFinderTextField), 30000);
    await delivery.cityFinderTextField.click();
    await delivery.cityFinderTextField.sendKeys(location);
    if (await ExpectedConditions.visibilityOf(delivery.textFieldValidityCheck)) {
        await delivery.searchForNearbyCollectionPointsButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(delivery.storeLocatorModal), 30000);
        await browser.wait(ExpectedConditions.elementToBeClickable(delivery.selectStoreButton), 30000);
    }
});

When(/^In the delivery page, I select a location and confirm my selection was successful$/, async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(delivery.selectStoreButton), 30000);
    let addressHeading = delivery.storeNameFieldModal.getAttribute('text').toString().toLowerCase();
    await delivery.selectStoreButton.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(delivery.storeNameFieldLocationOverview), 30000);
    let addressSelected = delivery.storeNameFieldLocationOverview.getAttribute('text').toString().toLowerCase();
    await assert.equal(addressSelected, addressHeading, 'The selected address is not correct:' + addressSelected);
});

When(/^In the delivery page, I fill in the following billing information$/, (data) => {
    let rows = data.hashes();
    return pageactions.fillBillingInfo(rows);
});

When(/^In the delivery page, I click on the "Review and pay" button and proceed to the payment page$/, async () => {
    await browser.wait(ExpectedConditions.elementToBeClickable(delivery.reviewAndPayButton), 30000);
    await delivery.reviewAndPayButton.click();
    await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + 'payment'), 30000);
});


