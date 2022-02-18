import {by, element, ElementFinder} from 'protractor';

class SearchResultsElements {

    public productSuggestion: ElementFinder;
    public searchResultsContainer: ElementFinder;
    public productNameHeader: ElementFinder;

    constructor() {
        this.productSuggestion = element(by.xpath("//li[@class[contains(.,'product')]]//a[@class[contains(.,'suggestion')]]"));
        this.searchResultsContainer = element(by.xpath("//div[@data-auto-id='glass-search-results-container']"));
        this.productNameHeader = element(by.xpath("//div[@class[contains(.,'sidebar')]]//div[@class[contains(.,'product-description')]]//h1/span"))
    }
}

export = SearchResultsElements;
