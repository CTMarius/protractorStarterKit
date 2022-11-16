import {by, element, ElementFinder} from 'protractor';

class mainPageElements {

    public textField: ElementFinder;
    public saveButton: ElementFinder; 
    public datePicker: ElementFinder;   

    constructor() {
        this.textField = element(by.id("textarea"));
        this.saveButton = element(by.id("save"));  
        this.datePicker = element(by.id("datepicker"));     
    }
}

export = mainPageElements;
