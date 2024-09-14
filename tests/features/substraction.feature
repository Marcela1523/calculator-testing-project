Feature: Substraction
    As a user I want to substract numbers so that I get the result value of the operation

    Rule: Substraction of zero, positive, or negative numbers

    Background: 
        Given I am on Google calculator page

    Scenario Outline: Sum of numbers
        When I perform "<operation>" operation in the calculator
        Then I can see "<output>" text in the calculator screen

        Examples:
        | operation        | output    |
        #| 17.5-54=         | -36.5     |
        #| 0-0=             | 0         |
        #| 1-(-0.27)=       | 1.27      |
        | (-2.5)-5-0=      | -7.5      | 