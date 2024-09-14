Feature: Key press
    As a user I want to use the keybord to interact with the calculator so I can use it easily

    Rule: Numbers and operator keys have the same behaviour than buttons
    Rule: Enter is the equivalent than equal

    Background: 
        Given I am on Google calculator page
    
    Scenario Outline: Pressing the numbers and operators using keyboard 
        When I perform "<operation>" operation using the keyboard
        Then I can see "<output>" text in the calculator screen

        Examples:
        | operation       | output    |
        | 0.98+(-2)=      | -1.02     |
        #| -45.6/1=        | -45.6     |
        #| 73-3.75=        | 69.25     |
        #| 2.5*4=          | 10        |