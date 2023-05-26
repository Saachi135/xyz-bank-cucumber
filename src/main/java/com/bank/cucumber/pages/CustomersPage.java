package com.bank.cucumber.pages;

import com.bank.cucumber.utility.Utility;
import org.openqa.selenium.By;

public class CustomersPage extends Utility {
    By yourNameobj = By.xpath("//select[@id='userSelect']");
    By loginButtonobj = By.xpath("//button[@class = 'btn btn-default']");

    By logoutButtonobj = By.xpath("//button[@class = 'btn logout']");

    By depositButtonobj = By.xpath("/html/body/div[3]/div/div[2]/div/div[3]/button[2]");

    By inputAmountobj = By.xpath("//input[@placeholder='amount']");

    By depositSubmitobj = By.xpath("/html/body/div[3]/div/div[2]/div/div[4]/div/form/button");

    By depositSuccessfulobj = By.xpath("/html/body/div[3]/div/div[2]/div/div[4]/div/span");

    By withdrawlButtonobj = By.xpath("/html/body/div[3]/div/div[2]/div/div[3]/button[3]");

    By withdrawlSussessfulmessageobj = By.xpath("//span[@class='error ng-binding']");

    public void yourName(String text) {
        selectByVisibleTextFromDropDown(yourNameobj, text);
    }

    public void loginButton() {
        clickOnElement(loginButtonobj);
    }

    public String logoutButton() {
        return getTextFromElement(logoutButtonobj);
    }

    public void clickOnLogoutButton() {
        clickOnElement(logoutButtonobj);
    }

    public void depositButton() {
        clickOnElement(depositButtonobj);
    }

    public void inputAmount(String text) {
        sendTextToElement(inputAmountobj, text);

    }

    public void submit() {
        clickOnElement(depositSubmitobj);
    }

    public String depositSuccessful() {
        return getTextFromElement(depositSuccessfulobj);
    }

    public void withdrawlButton() {
        clickOnElement(withdrawlButtonobj);
    }

    public String withdrawlSussessfulmessage(){
        return getTextFromElement(withdrawlSussessfulmessageobj);
    }
}
