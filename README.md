# calculator-testing-project
This project tests the Google calculator page using Playwright and BDD.
Playwright was selected because its recent popularity, simplicity from the setting up to its use, and the faster executions. 
Adittionally, BDD was also chosen to have easier tests to read for everyone and code reusability thanks to the definition steps.

This constains basic tests, and it is intended to keep on increasing the coverage in the future as a practice excercise of playwright and bdd.

## How to install and run the project?

### Prerequisites
* Node.js it is recommended to install it using NVM, please consult this page for more details. [Node Version Manager](https://github.com/nvm-sh/nvm)
* YARN package manager

### Installation
1. Access the repository [calculator-testing-project](https://github.com/Marcela1523/calculator-testing-project)
2. Click on Code button
3. Select the way you would be cloning the repository
4. Copy the link
6. Open a new terminal
7. Locate you in the destination folder
8. Execute the following command replacing copied_url with the link previously copied
```
git clone copied_url
``` 
9. Execute one of the following commands to install the dependencies, based on the package manager you prefer:
```
yarn install
```
### Running the tests
2. To use the already included script execute
```
yarn run test
```
This command will execute "yarn run bddgen" which generates the tests based on the feature and step files created.
Then it will execute "yarn run playwright" that lauches the tests.