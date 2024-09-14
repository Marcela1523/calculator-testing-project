Feature: Addition
    As a user I want to sum numbers so that I get the result value of the addition

    Rule: Addition of zero, positive, or negative numbers

    Background: 
        Given I am on Google calculator page
    
    Scenario Outline: Sum of 2 or more numbers
        When I perform "<operation>" operation in the calculator
        Then I can see "<output>" text in the calculator screen

        Examples:
        | operation      | output    |
        #| 1+13.2=        | 14.2      |
        #| 0+0=           | 0         |
        #| -1+(-27.5)=    | -28.5     |
        | 53+0+(-20.5)=  | 32.5      |