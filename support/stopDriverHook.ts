import {After} from "cucumber";
import {browser} from 'protractor/built';

After(async function () {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png")
    await browser.driver.close();
    await browser.driver.quit();
});


