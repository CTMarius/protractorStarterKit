import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class AppPage {
    public loginButton: ElementFinder;

    constructor() {
        this.loginButton = element(by.xpath("//div/a[contains(., 'Sign In')]"));
    }
}
export = AppPage;