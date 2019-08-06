import {defineSupportCode} from "cucumber";
import { browser } from 'protractor/built';
import { expect } from 'chai';
import AppPage = require('../pages/pageObjects');
import { Given, Then, When } from "cucumber";
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
var pageObject: AppPage = new AppPage();

    Given(/^I navigate to the login page$/, async() => {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.netflix.com/nl-en/').then(async() => {
            await pageObject.loginButton.isPresent().then(async(result) =>{
                await expect(result).to.be.true;
            })
        })
    });
