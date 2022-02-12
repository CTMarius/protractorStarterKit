import {by, element, ElementFinder} from 'protractor';

class DeliveryPageElements {

    public selectDeliveryTypeOption: ElementFinder;
    public searchLocationFiled: ElementFinder;


    constructor() {
        this.selectDeliveryTypeOption = element(by.xpath("//li[@class[contains(.,'product')]]//a[@class[contains(.,'suggestion')]]"));
        this.searchLocationFiled = element(by.xpath("//div[@data-auto-id='glass-search-results-container']"));
    }
}

export = DeliveryPageElements;
