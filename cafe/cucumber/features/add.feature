Feature: Add the employee details in Cafetown
  As a user of the cafeTown I would like to add the employee details for further use.

  Background:
    Given The cafeTown page is open
    When I enter the login details as Luke and Skywalker and click

  Scenario Outline: Add the employee
    When I click create to add the employee
    And I enter the details of the employe as <FirstName> and <LastName> and <StartDate> and <Email>
    Examples:
      |  FirstName  |   LastName     |  StartDate   |    Email         |
      |  Mobi       |   Quity        |   2019-12-12 |  Mobi@gmail.com  |
      |  Mobiqity   |   Qurty        |   2019-12-20 |  Mbi@gmail.com   |