Feature: Orange HRM Login Feature

  Scenario: User logs in with valid credentials
    Given visit Orange HRM website
    When User provide username
    When User provide password
    Then Click on login button to log in
