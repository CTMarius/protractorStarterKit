
import { browser, element, by, ExpectedConditions, ElementFinder, $} from 'protractor';

class FinalizeOnboardingPage {
    public elementName: ElementFinder;
    
    constructor() {
        this.elementName = element(by.xpath(""));  
    }
}
export = FinalizeOnboardingPage;
