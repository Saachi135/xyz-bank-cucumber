@smoke
Feature: User is on Home Page  http://www.way2automation.com/angularjs-protractor/banking/#/login

  Background:

  Scenario: Bank Manager Should Add Customer Successfully.
    Given click On Bank Manager Login Tab
    When  click On Add Customer Tab
    And   enter FirstName
    And   enter LastName
    And   enter PostCode
    And   click On Add Customer Button
    And   popup display
    Then  verify message "Customer added successfully"
    Then  click on "ok" button on popup.

  Scenario:  Bank Manager Should Open Account Successfully.
    Given  click On "Bank Manager Login" Tab
    And   Click On Open Account Tab
    And   Search customer that created in first test
    And   Select currency "Pound"
    And   Click on "process" button
    And   popup displayed
    Then  verify message Account created successfully
    Then  Click on ok button on popup.

  Scenario: customerShouldLoginAndLogoutSuceessfully.
    Given click on "Customer Login" Tab
    And   search customer that you created.
    And   click on "Login" Button
    And   verify "Logout" Tab displayed.
    And   click on "Logout"
    Then  verify "Your Name" text displayed.

  Scenario: Customer Should Deposit Money Successfully.
  Given click on "Customer Login" Tab
  And   Search customer that you created.
  And   click on Login Button
  And   click on Deposit Tab
  And   Enter amount 100
  And   click on "Deposit" Button
  Then verify message Deposit Successful

  Scenario: Customer Should Withdraw Money Successfully
  Given click on Customer Login Tab
  And   Search the customer that you created.
  And   click on Login tab Button
  And   click on Withdrawl Tab
  And   Enter amount 50.
  And   click on Deposit Button
  Then verify message Transaction Successful
