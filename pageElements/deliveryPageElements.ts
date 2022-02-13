import {by, element, ElementFinder} from 'protractor';

class DeliveryPageElements {

    public deliveryTypeColectionPoint: ElementFinder;
    public searchLocationFiled: ElementFinder;
    public shippingAdressHeading: ElementFinder;
    public cityFinderTextField: ElementFinder;
    public searchForNearbyCollectionPointsButton: ElementFinder;
    public storeLocatorModal: ElementFinder;
    public selectStoreButton: ElementFinder;
    public storeNameFieldModal: ElementFinder;
    public storeNameFieldLocationOverview: ElementFinder;
    public locationValidityCheck: ElementFinder;
    public firstNameField: ElementFinder;
    public lastNameField: ElementFinder;
    public addressField: ElementFinder;
    public townField: ElementFinder;
    public postCodeField: ElementFinder;
    public emailField: ElementFinder;
    public reviewAndPayButton: ElementFinder;

    constructor() {
        this.deliveryTypeColectionPoint = element(by.xpath("//*[@data-auto-id='delivery-option']//svg[@data-auto-id='delivery-option-icon-pudo']"));
        this.searchLocationFiled = element(by.xpath("//div[@data-auto-id='glass-search-results-container']"));
        this.shippingAdressHeading = element(by.xpath("//*[@data-auto-id='shippingAddress-heading']"));
        this.cityFinderTextField = element(by.id("pickpoint-search-input"));
        this.searchForNearbyCollectionPointsButton = element(by.xpath("//button[@data-auto-id='pickup-point-search-button']"));
        this.storeLocatorModal = element(by.xpath("//*[@data-auto-id='store-locator-modal']"));
        this.selectStoreButton = element(by.xpath("//button[@data-auto-id='select-store-button']"));
        this.storeNameFieldModal = element(by.xpath("//*[@data-auto-id='store-locator-modal']//*[@data-auto-id='store-name']"));
        this.storeNameFieldLocationOverview = element(by.xpath("//*[@data-auto-id='pickup-points-locator']//*[@data-auto-id='store-name']"));
        this.locationValidityCheck = element(by.xpath("//*[@id='app']//div[@class[contains(.,'form-item--success')]]"));
        this.firstNameField = element(by.id("billingAddress-firstName"));
        this.lastNameField = element(by.id("billingAddress-lastName"));
        this.addressField = element(by.xpath("//input[@id[contains(.,'billingAddress-address1')]]"));
        this.townField = element(by.id("billingAddress-city"));
        this.postCodeField = element(by.id("billingAddress-zipcode"));
        this.emailField = element(by.id("billingAddress-emailAddress"));
        this.reviewAndPayButton = element(by.xpath("//button[@data-auto-id='review-and-pay-button']"));
    }
}

export = DeliveryPageElements;
