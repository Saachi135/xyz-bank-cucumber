package com.bank.cucumber.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        tags = "",
        features = {"@target/failedrerun.txt"},
        glue = {"com/bank/cucumber/runner"},
        plugin = {}
)

public class FailedRunnerTest {

}
