import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class AppPage {
    public loginButton: ElementFinder;

    constructor() {
        this.loginButton = element(by.xpath("//*[@id=\"top\"]//span/a[contains(., 'Log in'')]"));
    }
}
export = AppPage;