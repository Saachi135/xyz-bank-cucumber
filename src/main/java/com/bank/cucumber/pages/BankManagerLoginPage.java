package com.bank.cucumber.pages;

import com.bank.cucumber.utility.Utility;
import org.openqa.selenium.By;

public class BankManagerLoginPage extends Utility {

    By addCustomerobj = By.xpath("/html/body/div[3]/div/div[2]/div/div[1]/button[1]");

    By openAccountobj = By.xpath("//button[normalize-space()='Open Account']");

    public void addCustomer() {
        clickOnElement(addCustomerobj);
    }

    public void openAccountobj() {
        clickOnElement(openAccountobj);

    }


}
