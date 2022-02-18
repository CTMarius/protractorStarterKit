import {defineSupportCode} from 'cucumber';
import {browser} from 'protractor/built';

defineSupportCode(function ({After, Before}) {
    After(async function () {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    });
});