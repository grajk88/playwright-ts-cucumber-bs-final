@regression
Feature: Homepage Functionality

  @smoke
  Scenario: Verify Product Web Testing
    Given User navigates to the Browserstack Homepage
    When User clicks on Product Menu
    Then It should show Web Testing Product

  @smoke
  Scenario: Verify Pricing Product Lists
    Given User Navigates to Browserstack Homepage
    When User clicks on Pricing Menu
    Then It should Display correct Product lists in left Nav

  Scenario: Verify Product 1 Web Testing
    Given User navigates to the Browserstack Homepage
    When User clicks on Product Menu
    Then It should show Web Testing Product

  Scenario: Verify Pricing Product 2 Lists
    Given User Navigates to Browserstack Homepage
    When User clicks on Pricing Menu
    Then It should Display correct Product lists in left Nav
