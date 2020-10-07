import {defineSupportCode} from "cucumber";
import { browser } from 'protractor/built';
import { expect } from 'chai';
import AppPage = require('../pages/pageObjects');
import { Given, Then, When } from "cucumber";
var {setDefaultTimeout} = require('cucumber');
var pageObject: AppPage = new AppPage();
setDefaultTimeout(60 * 1000);

    Given(/^I navigate to the main page$/, async() => {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.netflix.com').then(async() => {
            await pageObject.loginButton.isPresent().then(async(result) =>{
                await expect(result).to.be.true;
            })
        })
    });

    When(/^I type "(.*?)" in the email field$/, async(email) => {
        browser.waitForAngularEnabled(false);       
            await pageObject.emailField.isPresent().then(async(result) =>{
                return pageObject.emailField.sendKeys(email);
            })        
    });

    When(/^I click on the sign in button$/, async() => {
        browser.waitForAngularEnabled(false); 
        await pageObject.loginButton.click();
    });
