Feature: As a user of the cafeTown I would like to add, edit and delete the employee details for further use.

  Background:
    Given The cafeTown page is open
    When I enter the login details as Luke and Skywalker and click

  Scenario Outline: Add the employee
    When I click create to add the employee
    And I enter the details of the employe as <FirstName> and <LastName> and <StartDate> and <Email>
    Then I click add to save employee
    Examples:
      |  FirstName  |   LastName     |  StartDate   |    Email         |
      |  Mobi       |   Quity        |   2019-12-12 |  Mobi@gmail.com  |
      |  Mobiqity   |   Qurty        |   2019-12-20 |  Mbi@gmail.com   |

  Scenario: Edit the employee
    When I select the employee
    When I click edit to update the employee
    And I update the email address of the employee as mmmmobi@gmail.com
    Then I Update to save employee

  Scenario: Delete the employee
    When I select the employee
    And I click delete and accept to delete the employee
    Then I finally logout