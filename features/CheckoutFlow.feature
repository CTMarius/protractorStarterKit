Feature: Checkout flow

  @checkoutFlow
  Scenario Outline: Checkout Flow
    Given I navigate to the main page and I choose my region '<Region>'
    And I search for the '<SearchTerm>' activity and select the first product

    Examples:
      | Region | SearchTerm |
      | GB     | running    |
