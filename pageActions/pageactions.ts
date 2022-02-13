import MainPage = require('../pageElements/mainPageElements');

let mainPage: MainPage = new MainPage();

class pageActions {
    public async countryChoose(countryCode) {
        if (countryCode == 'GB') {
            await mainPage.countryOptionGB.click();
            await mainPage.goButton.click();
        } else if (countryCode == 'NL') {
            await mainPage.countryOptionNL.click();
            await mainPage.goButton.click();
        }
    }
}

export = pageActions;