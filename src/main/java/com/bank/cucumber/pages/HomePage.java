package com.bank.cucumber.pages;

import com.bank.cucumber.utility.Utility;
import org.openqa.selenium.By;

public class HomePage extends Utility {
    By bankManagerLoginobj = By.xpath("//button[normalize-space()='Bank Manager Login']");

    By customerLoginButtonobj = By.cssSelector("button[ng-click='customer()']");
    public void clickbankManagerLogin() {
        clickOnElement(bankManagerLoginobj);

    }
    public void customerLoginButton(){
        clickOnElement(customerLoginButtonobj);
    }
}
