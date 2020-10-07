import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class AppPage {
    public loginButton: ElementFinder;
    public emailField: ElementFinder;

    constructor() {
        this.loginButton = element(by.xpath("//div/a[contains(., 'Sign In')]"));
        this.emailField = element(by.id("id_userLoginId"));
        
    }
}
export = AppPage;
