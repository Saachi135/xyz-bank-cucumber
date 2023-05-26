$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankTest.feature");
formatter.feature({
  "line": 2,
  "name": "User is on Home Page  http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "description": "",
  "id": "user-is-on-home-page--http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 14699556800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Bank Manager Should Add Customer Successfully.",
  "description": "",
  "id": "user-is-on-home-page--http://www.way2automation.com/angularjs-protractor/banking/#/login;bank-manager-should-add-customer-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "click On Bank Manager Login Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click On Add Customer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click On \"Add Customer\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "popup display",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify message \"Customer added successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on \"ok\" button on popup.",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.clickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 711199600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.clickOnAddCustomerTab()"
});
formatter.result({
  "duration": 993367200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.enterFirstName()"
});
formatter.result({
  "duration": 729294300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.enterLastName()"
});
formatter.result({
  "duration": 284007300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.enterPostCode()"
});
formatter.result({
  "duration": 243166300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Customer",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.clickOnButton()"
});
formatter.result({
  "duration": 865200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.bank.cucumber.steps.BankTestSteps.clickOnButton() in file:/C:/Users/gp_14/IdeaProjects/xyz-bank-cucumber/target/test-classes/\u0027 with pattern [^click On \"([^\"]*)\" Button$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Add Customer]. \nStep: And click On \"Add Customer\" Button\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankTestSteps.popupDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 16
    }
  ],
  "location": "BankTestSteps.verifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.clickOnButtonOnPopup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4284485500,
  "status": "passed"
});
formatter.before({
  "duration": 8248891400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Bank Manager Should Open Account Successfully.",
  "description": "",
  "id": "user-is-on-home-page--http://www.way2automation.com/angularjs-protractor/banking/#/login;bank-manager-should-open-account-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "click On \"Bank Manager Login\" Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click On \"Open Account\" Tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Search customer that created in first test",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \"process\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify message Account created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on ok button on popup.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Manager Login",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.clickOnTab()"
});
formatter.result({
  "duration": 335400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.bank.cucumber.steps.BankTestSteps.clickOnTab() in file:/C:/Users/gp_14/IdeaProjects/xyz-bank-cucumber/target/test-classes/\u0027 with pattern [^click On \"([^\"]*)\" Tab$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Bank Manager Login]. \nStep: Given click On \"Bank Manager Login\" Tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open Account",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.clickOnTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankTestSteps.searchCustomerThatCreatedInFirstTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 17
    }
  ],
  "location": "BankTestSteps.selectCurrency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankTestSteps.popupDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankTestSteps.verifyMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankTestSteps.clickOnOkButtonOnPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3348388400,
  "status": "passed"
});
formatter.before({
  "duration": 8139345200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 27,
  "name": "customerShouldLoginAndLogoutSuceessfully.",
  "description": "",
  "id": "user-is-on-home-page--http://www.way2automation.com/angularjs-protractor/banking/#/login;customershouldloginandlogoutsuceessfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "click on \"Customer Login\" Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "search customer that you created.",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on \"Login\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify \"Logout\" Tab displayed.",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify \"Your Name\" text displayed.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BankTestSteps.searchCustomerThatYouCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 8
    }
  ],
  "location": "BankTestSteps.verifyTabDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.clickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name",
      "offset": 8
    }
  ],
  "location": "BankTestSteps.verifyTextDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1247219300,
  "status": "passed"
});
});