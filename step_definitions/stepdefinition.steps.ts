import {defineSupportCode} from "cucumber";
import { browser } from 'protractor/built';
import { expect } from 'chai';
import { assert } from 'chai';
import { Given, Then, When } from "cucumber";
import LoginPage = require('../pages/loginPageObjects');

var LoginPage: LoginPage = new LoginPage();
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

    Given(/^I navigate to the main page$/, async() => {        
        await browser.get('https://www.netflix.com').then(async() => {
            if(LoginPage.acceptCookies.isPresent()){
                LoginPage.acceptCookies.click();
            }
            await LoginPage.loginButton.isPresent().then(async(result) =>{
                return expect(result).to.be.true;
            })
        })
    });

    When(/^I type "(.*?)" in the email field$/, async(email) => {             
       await LoginPage.emailField.isPresent().then(async(result) =>{
          await LoginPage.emailField.sendKeys(email);
        })        
    });

    When(/^I click on the sign in button$/, async() => {        
        return LoginPage.loginButton.click();
    });
