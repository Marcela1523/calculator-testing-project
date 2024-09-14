Feature: Calculator buttons
    As a user I want to see the numbers clicked on, so that I can verify them

    Background: 
        Given I am on Google calculator page
    
    Scenario Outline: Pressing the buttons at first
        When I enter "<entry>" value in the the calculator
        Then I can see "<entry>" text in the calculator screen
        Examples:
        | entry     |
        | 1         |
        | 2         |
        | 3         |
        | 4         |
        | 5         |
        | 6         |
        | 7         |
        | 8         |
        | 9         |
        | 0         |
    
    Scenario Outline: Pressing operators at first
        When I enter "<entry>" value in the the calculator
        Then I can see "<output>" text in the calculator screen
        Examples:
        | entry     | output    |
        | +         | 0 +       |
        | /         | 0 ÷       |
        | x         | 0 ×       |
        | -         | -         |