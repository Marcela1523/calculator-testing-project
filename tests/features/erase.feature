Feature: Remove character
    As a user I want to remove a number/operator so that I can correct my operation

    Background: 
        Given I am on Google calculator page
    
    Scenario: Erasing last number
        Given I enter "25" value in the the calculator
        And I can see "25" text in the calculator screen
        When I remove 1 digit
        Then I can see "2" text in the calculator screen
    
    Scenario: Erasing the whole entry
        Given I enter "123+25" value in the the calculator
        And I can see "123 + 25" text in the calculator screen
        When I remove all digits
        Then I can see "0" text in the calculator screen        