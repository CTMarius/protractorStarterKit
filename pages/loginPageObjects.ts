import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class LoginPage {
    public loginButton: ElementFinder;
    public emailField: ElementFinder;
    public acceptCookies: ElementFinder;

    constructor() {
        this.loginButton = element(by.xpath("//div/a[contains(., 'Sign In')]"));
        this.emailField = element(by.id("id_userLoginId"));
        this.acceptCookies = element(by.className("btn-red"));
        
    }
}
export = LoginPage;
