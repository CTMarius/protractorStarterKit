import {by, element, ElementFinder} from 'protractor';

class DeliveryPageElements {

    public deliveryTypeColectionPoint: ElementFinder;
    public searchLocationFiled: ElementFinder;
    public shippingAdressHeading: ElementFinder;

    constructor() {
        this.deliveryTypeColectionPoint = element(by.xpath("//*[@data-auto-id='delivery-option']//svg[@data-auto-id='delivery-option-icon-pudo']"));
        this.searchLocationFiled = element(by.xpath("//div[@data-auto-id='glass-search-results-container']"));
        this.shippingAdressHeading = element(by.xpath("//*[@data-auto-id='shippingAddress-heading']"));

    }
}

export = DeliveryPageElements;
