Feature: Test feature

  Scenario Outline: FirsScenario
    Given I navigate to the login page
    When I login into the application
    And I click on the "<Example1>" button
    Then I expect to see "<Example2>"

    Examples:
    |Example1|Example2|
    |"Value1"|"Value2"|