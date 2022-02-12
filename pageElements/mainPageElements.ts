import {by, element, ElementFinder} from 'protractor';

class mainPageElements {

    public searchField: ElementFinder;
    public countryModal: ElementFinder;
    public countryOptionGB: ElementFinder;
    public countryOptionNL: ElementFinder;
    public goButton: ElementFinder;
    public acceptTrackingButton: ElementFinder;
    public signUpdiscountModal: ElementFinder;
    public sizeSelectionArea: ElementFinder;
    public addToBagButton: ElementFinder;
    public addedToBagModal: ElementFinder;
    public viewBagButton: ElementFinder;
    public checkoutBottomButton: ElementFinder;

    constructor() {
        this.searchField = element(by.xpath("//input[@data-auto-id = 'searchinput']"));
        this.countryModal = element(by.xpath("//*[@id='modal-root']//div[@class[contains(.,'country-radio-group')]]"));
        this.countryOptionGB = element(by.xpath("//label[@class[contains(.,'gl-radio-input')]]//span[text()='United Kingdom']"));
        this.countryOptionNL = element(by.xpath("//label[@class[contains(.,'gl-radio-input')]]//span[text()='Netherlands']"));
        this.goButton = element(by.xpath("//button[@data-auto-id='choose-delivery-country']"));
        this.acceptTrackingButton = element(by.xpath("//button[@data-auto-id='glass-gdpr-default-consent-accept-button']"));
        this.signUpdiscountModal = element(by.xpath("//div[@role='dialog' and contains(.,'Sign up')]//button[@class[contains(.,'close')]]"));
        this.sizeSelectionArea = element(by.xpath("//div[@class[contains(.,'size-selector')]]"));
        this.addToBagButton = element(by.xpath("//button[@data-auto-id='add-to-bag']"));
        this.addedToBagModal = element(by.xpath("//div[@data-auto-id='added-to-bag-modal']"));
        this.viewBagButton = element(by.xpath("//a[@data-auto-id='view-bag-desktop']"));
        this.checkoutBottomButton = element(by.xpath("//*[@data-auto-id='glass-checkout-button-bottom']"));
    }
}

export = mainPageElements;
