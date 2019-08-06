import {defineSupportCode, HookScenarioResult} from 'cucumber';
import {browser} from 'protractor';

defineSupportCode(function({After,Before}){
    After(async function() {
            // screenShot is a base-64 encoded PNG
            const screenShot = await browser.takeScreenshot();
            this.attach(screenShot, "image/png");
    });

});