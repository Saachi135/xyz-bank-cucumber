package com.bank.cucumber.pages;

import com.bank.cucumber.utility.Utility;
import org.openqa.selenium.By;

public class OpenAccountPage extends Utility {

    By selectCustomerobj = By.cssSelector("#userSelect");

    By currencyobj = By.xpath("//select[@id='currency']");

    By processButtonobj = By.xpath("//button[@type='submit']");

    public void selectCustomer(String text) {
        selectByVisibleTextFromDropDown(selectCustomerobj, text);
    }

    public void currency(String text) {
        selectByVisibleTextFromDropDown(currencyobj, text);
    }

    public void processButton() {
        clickOnElement(processButtonobj);
    }
}
