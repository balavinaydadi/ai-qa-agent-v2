Feature: Login Test

  Scenario: Valid Login
    Given user navigates to login page
    When user enters valid credentials
    And clicks submit
    Then user should see success message