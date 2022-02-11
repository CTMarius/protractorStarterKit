import {by, element, ElementFinder} from 'protractor';

class mainPage {

    public searchField: ElementFinder;
    public countryModal: ElementFinder;
    public countryOptionGB: ElementFinder;
    public countryOptionNL: ElementFinder;
    public goButton: ElementFinder;
    public acceptTrackingButton: ElementFinder;
    public productSuggestion: ElementFinder;
    public searchResultsContainer: ElementFinder;


    constructor() {
        this.searchField = element(by.xpath("//input[@data-auto-id = 'searchinput']"));
        this.countryModal = element(by.xpath("//*[@id='modal-root']//div[@class[contains(.,'country-radio-group')]]"));
        this.countryOptionGB = element(by.xpath("//label[@class[contains(.,'gl-radio-input')]]//span[text()='United Kingdom']"));
        this.countryOptionNL = element(by.xpath("//label[@class[contains(.,'gl-radio-input')]]//span[text()='Netherlands']"));
        this.goButton = element(by.xpath("//button[@data-auto-id='choose-delivery-country']"));
        this.acceptTrackingButton = element(by.xpath("//button[@data-auto-id='glass-gdpr-default-consent-accept-button']"));
        this.productSuggestion = element(by.xpath("//li[@class[contains(.,'product')]][1]//a[@class[contains(.,\"suggestion\")]]"));
        this.searchResultsContainer = element(by.xpath("//div[@data-auto-id='glass-search-results-container']"));


    }
}

export = mainPage;
