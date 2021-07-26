$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "  Description: This feature will be used to login to SwagLab Application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that when use enters correct username and password they should able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveSceanrio"
    }
  ]
});
formatter.step({
  "name": "User open the SwagLab Application",
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
  "name": "User should be navigated to product page successfully",
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
      "name": "@Login"
    },
    {
      "name": "@PositiveSceanrio"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the SwagLab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_open_the_swaglab_application()"
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
  "name": "User should be navigated to product page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_navigated_to_product_page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that when use enters wrong username and password they should able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeSceanrio"
    }
  ]
});
formatter.step({
  "name": "User open the SwagLab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the wrong username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the wrong password  \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should get error message",
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
        "sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when use enters wrong username and password they should able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@NegativeSceanrio"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the SwagLab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_open_the_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the wrong username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_the_wrong_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the wrong password  \"sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_the_wrong_password_something(String)"
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
  "name": "User should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_get_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/Product.feature");
formatter.feature({
  "name": "Product List Feature",
  "description": "  Discriprtion: Adding  item to the cart",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that usser is able to add single product to the cart.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PRoductFeatur"
    }
  ]
});
formatter.step({
  "name": "User select the product \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User able to see the selected product in cart item",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the  SwagLab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductSteps.user_is_on_the_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.enters_the_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.enters_the_password_something(String)"
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
formatter.scenario({
  "name": "Verify that usser is able to add single product to the cart.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@PRoductFeatur"
    }
  ]
});
formatter.step({
  "name": "User select the product \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.user_select_the_product_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the selected product in cart item",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.user_able_to_see_the_selected_product_in_cart_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the  SwagLab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductSteps.user_is_on_the_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.enters_the_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.enters_the_password_something(String)"
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
formatter.scenario({
  "name": "Verify that usser is able to add multiple product to the cart.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Datatable"
    }
  ]
});
formatter.step({
  "name": "User select the list of product",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Product1",
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Product2",
        "Sauce Labs Bike Light"
      ]
    },
    {
      "cells": [
        "Product3",
        "Sauce Labs Bolt T-Shirt"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.user_select_the_list_of_product(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the selected product in cart item",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.user_able_to_see_the_selected_product_in_cart_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});