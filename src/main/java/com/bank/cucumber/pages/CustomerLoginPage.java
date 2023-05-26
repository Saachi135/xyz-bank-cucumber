package com.bank.cucumber.pages;

import com.bank.cucumber.utility.Utility;
import org.openqa.selenium.By;

public class CustomerLoginPage extends Utility {
    By yourNameobj = By.xpath("//label[contains(text(),'Your Name :')]");

    public String yourName(){
        return getTextFromElement(yourNameobj);
    }
}
