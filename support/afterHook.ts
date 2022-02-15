import {After} from "cucumber";
import {browser} from 'protractor/built';

After(async function () {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");

    let defaultError = console.error.bind(console);
    let errors = [];

    await (() => {
        defaultError.apply(console, arguments);
        errors.push(Array.from(arguments));
        if (errors.values() !== null && errors.length > 0) {
            throw new Error('Javascript errors! ' + errors.values());
        }
    });

    await browser.driver.close();
    await browser.driver.quit();
});


