import {defineSupportCode} from "cucumber";
import { browser } from 'protractor/built';
import { expect } from 'chai';
import { assert } from 'chai';
import { Given, Then, When } from "cucumber";
import LoginPage = require('../pages/loginPageObjects');

var loginPage: LoginPage = new LoginPage();
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
browser.waitForAngularEnabled(false);

    Given(/^I navigate to the main page$/, async() => {        
        await browser.get('https://www.netflix.com').then(async() => {
            if(loginPage.acceptCookies.isPresent()){
                loginPage.acceptCookies.click();
            }
            await loginPage.loginButton.isPresent().then(async(result) =>{
                return expect(result).to.be.true;
            })
        })
    });

    When(/^I type "(.*?)" in the email field$/, async(email) => {             
       await loginPage.emailField.isPresent().then(async(result) =>{
          await loginPage.emailField.sendKeys(email);
        })        
    });

    When(/^I click on the sign in button$/, async() => {        
        return loginPage.loginButton.click();
    });

//TODO: Add step definitions for typing in a password, clicking on the submit link and checking if the user is logged in correctly. Try to also use of the Then keyword.




