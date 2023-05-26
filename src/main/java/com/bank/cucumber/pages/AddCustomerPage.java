package com.bank.cucumber.pages;

import com.bank.cucumber.utility.Utility;
import org.openqa.selenium.By;

public class AddCustomerPage extends Utility {

    By firstNameobj = By.xpath("//input[@placeholder='First Name']");

    By lastNameobj = By.xpath("//input[@placeholder='Last Name']");

    By postCodeobj = By.xpath("//input[@placeholder='Post Code']");

    By addCustomerobj = By.xpath("//button[@type='submit']");

    public void firstName(String text) {
        sendTextToElement(firstNameobj, text);
    }

    public void lastName(String text) {
        sendTextToElement(lastNameobj, text);
    }

    public void postCode(String text) {
        sendTextToElement(postCodeobj, text);
    }

    public void addCustomer() {
        clickOnElement(addCustomerobj);
    }


}
