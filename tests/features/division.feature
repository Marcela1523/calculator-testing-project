Feature: Division operator
    As a user I want to divide numbers so that I get the result quickly

    Rule: Division of positive, or negative numbers
    Rule: Divisor should not be 0

    Background: 
        Given I am on Google calculator page

    Scenario Outline: Division of numbers
        When I perform "<operation>" operation in the calculator
        Then I can see "<output>" text in the calculator screen

        Examples:
        | operation       | output    |
        #| 1/3.2=          | 0.3125    |
        #| -20.01/3.2=     | -6.253125 |
        | 4/(-8.0)/100=    | -0.005    |

    Scenario: Division should not be 0
        When I perform "5/0=" operation in the calculator
        Then I can see "Infinity" text in the calculator screen