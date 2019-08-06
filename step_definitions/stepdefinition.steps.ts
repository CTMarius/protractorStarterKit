import {defineSupportCode} from "cucumber";
import { browser } from 'protractor';
import { expect } from 'chai';
import AppPage = require('../pages/pageObjects');
import { Given, Then, When } from "cucumber";
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
var pageObject: AppPage = new AppPage();

    Given(/^I navigate to the login page$/, async() => {
        await browser.get('https://developer.db.com/').then(async() => {
            await expect(pageObject.loginButton.isPresent()).to.be.true;
        })
    });
