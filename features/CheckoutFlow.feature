Feature: Checkout flow

  @checkoutFlow
  Scenario Outline: Checkout Flow
    Given I navigate to the main page and I choose my region '<Region>'
    When I search for the '<Search Term>' activity and select the product called '<Product Name>'
    And I select the size '<Size>' and add the product '<Product Name>' to my bag
    Then I click on the View Bag button and navigate to the chart
    And In the chart page I proceed to checkout
    And from the '<Module>' module, click '<Item>'
    When I search for collection points in '<Location>'
    And In the delivery page, I select a location and confirm my selection was successful
    And In the delivery page, I fill in the following billing information
      | FirstName | LastName | Address | City   | PostCode | Email        |
      | Test      | User     | Address | London | HR47RW   | email@grr.la |
    And In the delivery page, I click on the "Review and pay" button

    Examples:
      | Region | Search Term | Product Name   | Size | Location | Module         | Item                    |
      | GB     | running     | FastImpact Luxe | XS A-C | London   | Get your order | From a collection point |
