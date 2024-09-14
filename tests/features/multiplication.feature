Feature: Multitplication
    As a user I want to multiply numbers so I can get the result

    Rule: Multiplication of zero, positive, or negative numbers
    
    Background: 
        Given I am on Google calculator page

    Scenario Outline: Sum of 2 or more numbers
        When I perform "<operation>" operation in the calculator
        Then I can see "<output>" text in the calculator screen

        Examples:
        | operation      | output    |
        #| 1x5.3=         | 5.3       |
        #| 0x0=           | 0         |
        #| -15.4x(-75)=   | 1155      |
        | -33x10.5x0.2=  | -69.3     |   