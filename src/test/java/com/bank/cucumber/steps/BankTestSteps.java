package com.bank.cucumber.steps;

import com.bank.cucumber.pages.*;
import com.bank.cucumber.utility.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class BankTestSteps {
    @Given("^click On Bank Manager Login Tab$")
    public void clickOnBankManagerLoginTab() {
        new HomePage().clickbankManagerLogin();
    }

    @When("^click On Add Customer Tab$")
    public void clickOnAddCustomerTab() {
        new BankManagerLoginPage().addCustomer();
    }

    @And("^enter FirstName$")
    public void enterFirstName() {
        new AddCustomerPage().firstName("Gaura");
    }

    @And("^enter LastName$")
    public void enterLastName() {
        new AddCustomerPage().lastName("Panch");
    }

    @And("^enter PostCode$")
    public void enterPostCode() {
        new AddCustomerPage().postCode("HA4 0HP");
    }

    @And("^click On Add Customer Button$")
    public void clickOnAddCustomerButton() {
            new AddCustomerPage().addCustomer();

    }

    @And("^popup display$")
    public void popupDisplay() {
        new Utility().switchToAlert();

    }

    @Then("^verify message \"([^\"]*)\"$")
    public void verifyMessage(String arg0) {
        Assert.assertEquals(new Utility().getTextFromAlert(), "Customer added successfully with customer id :6");
    }

    @Then("^click on \"([^\"]*)\" button on popup\\.$")
    public void clickOnButtonOnPopup(String arg0) {
        new Utility().acceptAlert();

    }

    @Given("^click On \"([^\"]*)\" Tab$")
    public void clickOn1Tab () {
        new HomePage().clickbankManagerLogin();
    }

    @And("^Click On \"([^\"]*)\" Tab$")
    public void clickOnTab() {
        new BankManagerLoginPage().openAccountobj();
    }

    @And("^Search customer that created in first test$")
    public void searchCustomerThatCreatedInFirstTest() {
        new OpenAccountPage().selectCustomer("Ron Weasly");
    }

    @And("^Select currency \"([^\"]*)\"$")
    public void selectCurrency(String arg0) {
        new OpenAccountPage().currency("Pound");
    }

    @And("^Click on \"([^\"]*)\" button$")
    public void clickOnButton1() {
        new OpenAccountPage().processButton();
    }

    @And("^popup displayed$")
    public void popupDisplayed() {
        new Utility().switchToAlert();
    }

    @Then("^verify message Account created successfully$")
    public void verifyMessageAccountCreatedSuccessfully() {
        Assert.assertEquals(new Utility().getTextFromAlert(), "Account created successfully with account Number :1016");
    }

    @Then("^Click on ok button on popup\\.$")
    public void clickOnOkButtonOnPopup() {
        new Utility().acceptAlert();
    }

//    @Given("^click on \"([^\"]*)\" Tab$")
//    public void clickOnTab(String text) {
//        new HomePage().customerLoginButton();
//    }

    @And("^search customer that you created\\.$")
    public void searchCustomerThatYouCreated1() {
        new CustomersPage().yourName("Gauran");
    }

//    @And("^click on \"([^\"]*)\" Button$")
//    public void clickOnButton() {
//        new CustomersPage().loginButton();
//    }

    @And("^verify \"([^\"]*)\" Tab displayed\\.$")
    public void verifyTabDisplayed(String arg0) {
        Assert.assertEquals(new CustomersPage().logoutButton(), "Logout");
    }

    @And("^click on \"([^\"]*)\"$")
    public void clickOn(String arg0) {
        new CustomersPage().clickOnLogoutButton();
    }

    @Then("^verify \"([^\"]*)\" text displayed\\.$")
    public void verifyTextDisplayed(String arg0) {
        Assert.assertEquals(new CustomerLoginPage().yourName(), "Your Name :", "Text Not Matching Your Name");

    }

    @Given("^click on \"([^\"]*)\" Tab$")
    public void clickOnTab(String arg0) {
        new HomePage().customerLoginButton();
    }

    @And("^Search customer that you created\\.$")
    public void searchCustomerThatYouCreated() {
        new CustomersPage().yourName("Gauran");
    }

    @And("^click on Login Button$")
    public void clickOnLoginButton() {
        new CustomersPage().loginButton();
    }

    @And("^click on Deposit Tab$")
    public void clickOnDepositTab() {
        new CustomersPage().depositButton();
    }

    @And("^Enter amount (\\d+)$")
    public void enterAmount1(int arg0) {
        new CustomersPage().inputAmount("100");
    }

    @And("^click on \"([^\"]*)\" Button$")
    public void clickOnButton(String arg0) {
        new CustomersPage().submit();
    }

    @Then("^verify message Deposit Successful$")
    public void verifyMessageDepositSuccessful() {
        Assert.assertEquals(new CustomersPage().depositSuccessful(), "Deposit Successful", "Text Display not Matching");
    }

    @Given("^click on Customer Login Tab$")
    public void clickOnCustomerLoginTab() {
        new HomePage().customerLoginButton();
    }

    @And("^Search the customer that you created\\.$")
    public void searchTheCustomerThatYouCreated() {
        new CustomersPage().yourName("Gauran");
    }

    @And("^click on Login tab Button$")
    public void clickOnLoginTabButton() {
        new CustomersPage().loginButton();
    }

    @And("^click on Withdrawl Tab$")
    public void clickOnWithdrawlTab() {
        new CustomersPage().withdrawlButton();
    }

    @And("^Enter amount (\\d+)\\.$")
    public void enterAmount(int arg0) {
        new CustomersPage().inputAmount("5");
    }

    @And("^click on Deposit Button$")
    public void clickOnDepositButton() {
        new CustomersPage().submit();
    }

    @Then("^verify message Transaction Successful$")
    public void verifyMessageTransactionSuccessful() {
        Assert.assertEquals(new CustomersPage().withdrawlSussessfulmessage(), "Transaction Failed. You can not withdraw amount more than the balance.", "Message Display Correct");
    }


}


