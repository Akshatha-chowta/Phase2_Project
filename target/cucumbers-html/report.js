$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  Description: This feature will be used to login to Swigylab Application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that when use enters correct username and password they should able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    }
  ]
});
formatter.step({
  "name": "User has opened the Swigylab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the correct username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the correct password  \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be navigated to next page successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when use enters correct username and password they should able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@PositiveLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the Swigylab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_swigylab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the correct username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_the_correct_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the correct password  \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_the_correct_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated to next page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_navigated_to_next_page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that when use enters Incorrect username and password they should get error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the Swigylab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the correct username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the correct password  \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should get error \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "abcd",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when use enters Incorrect username and password they should get error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@NegativeLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the Swigylab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_swigylab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the correct username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_the_correct_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the correct password  \"abcd\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_the_correct_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get error \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_get_error_something(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c[[ChromeDriver: chrome on LINUX (743e8bbd6dea5b413437c636d856e9b0)] -\u003e xpath: //*[@data-test\u003d\u0027error\u0027]]\u003e but was:\u003cEpic sadface: Username and password do not match any user in this service\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat StepDefinition.LoginSteps.user_should_get_error_something(LoginSteps.java:55)\n\tat ✽.User should get error \"Epic sadface: Username and password do not match any user in this service\"(file:src/test/java/feature/Login.feature:24)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});