Feature: Test feature

  Scenario Outline: FirsScenario
    Given I navigate to the main page
    When I click on the sign in button
    And I type <email> in the email field
    
  Examples:
  |email|
  |"testemail@grr.la"|
