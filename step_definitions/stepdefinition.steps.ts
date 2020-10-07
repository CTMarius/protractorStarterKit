import {defineSupportCode} from "cucumber";
import { browser } from 'protractor/built';
import { expect } from 'chai';
import { assert } from 'chai';
import { Given, Then, When } from "cucumber";
import AppPage = require('../pages/pageObjects');

var {setDefaultTimeout} = require('cucumber');
var pageObject: AppPage = new AppPage();
setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

    Given(/^I navigate to the main page$/, async() => {        
        await browser.get('https://www.netflix.com').then(async() => {
            if(pageObject.acceptCookies.isPresent()){
                pageObject.acceptCookies.click();
            }
            await pageObject.loginButton.isPresent().then(async(result) =>{
                return expect(result).to.be.true;
            })
        })
    });

    When(/^I type "(.*?)" in the email field$/, async(email) => {             
            await pageObject.emailField.isPresent().then(async(result) =>{
                await pageObject.emailField.sendKeys(email);
            })        
    });

    When(/^I click on the sign in button$/, async() => {        
        return pageObject.loginButton.click();
    });
