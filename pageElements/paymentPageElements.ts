import {by, element, ElementFinder} from 'protractor';

class SearchResultsElements {

    public paymentMethodContainer: ElementFinder;
    public paymentMethodLabel: ElementFinder;


    constructor() {
        this.paymentMethodContainer = element(by.xpath("//div[@data-auto-id='payment-method']"));
        this.paymentMethodLabel = element(by.xpath("//div[@data-auto-id='payment-method']//label[@class[contains(.,'gl-radio-input__option')]]"));
    }
}

export = SearchResultsElements;
