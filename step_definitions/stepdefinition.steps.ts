import {defineSupportCode} from "cucumber";
import { browser } from 'protractor';
import { expect } from 'chai';
import {AppPage} from '../pages/pageObjects';
import { Given, Then, When } from "cucumber";

    Given(/^I navigate to the login page$/, async() => {
        await browser.get('https://developer.db.com/')
    });
