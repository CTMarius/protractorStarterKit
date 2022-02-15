import {Before} from "cucumber";
import {browser} from 'protractor/built';

let {setDefaultTimeout} = require('cucumber');
Before(async function () {
    setDefaultTimeout(60 * 1000);
    browser.waitForAngularEnabled(false);
});


