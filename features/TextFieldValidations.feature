Feature: Text field

  @savebuttonstatus
  Scenario Outline: Save button changes status
    Given I navigate to the main page
    When In the main page, I type the <string> in the text field
    Then In the main page, the save button is <status>
    When In the main page, I clear the text field
    Then In the main page, the save button is <newstatus>

    Examples: 
      | string | status  | newstatus |
      | GB     | enabled | disabled  |

  @typeinfieldandsave
  Scenario Outline: Save text
    Given I navigate to the main page
    When In the main page, I type the <string> in the text field
    And In the main page, I click on the save button

    Examples: 
      | string |
      | GB     |
