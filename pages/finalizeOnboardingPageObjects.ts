
import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class FinalizeOnboardingPage {
    
    //TODO: define here the elements required to perform actions in the finalize account page. Use LoginPage as example.
    
    public elementName: ElementFinder;
    
    constructor() {
        this.elementName = element(by.xpath(""));  
    }
}
export = FinalizeOnboardingPage;
