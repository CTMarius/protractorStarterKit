import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class LoginPage {
    public loginButton: ElementFinder;
    public emailField: ElementFinder;
    public acceptCookies: ElementFinder;    
    //Define below this line the elements for the password field and the submit button. Use the existing elements as an example.  
        
    constructor() {
        this.loginButton = element(by.xpath("//div/a[contains(., 'Sign In')]"));
        this.emailField = element(by.id("id_userLoginId"));
        this.acceptCookies = element(by.className("btn-red"));
        //Add constructors for your elements below this line. Use the existing constructors as an example.
        
    }
}
export = LoginPage;
