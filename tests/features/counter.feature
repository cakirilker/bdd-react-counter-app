Feature: Counter Operations

Scenario: Changing Counter Value

  Given I open app home page
  Then counter value is "0"
  When I increase counter
  Then counter value is "1"
  When I decrease counter
  Then counter value is "0"