# calculator-testing-project
This project tests the Google calculator page using Playwright and BDD.
Playwright was selected because its recent popularity, simplicity from the setting up to its use, and the faster executions. 
Adittionally, BDD was also chosen to comprehend each test easily thanks to gherkin format.

This constains basic tests, and it is intended to keep on increasing the coverage in the future as a practice excercise of Playwright and BDD.

## How to install and run the project?

### Prerequisites
* Node.js: it is recommended to install it using NVM, please consult this page for more details. [Node Version Manager](https://github.com/nvm-sh/nvm)
* YARN package manager

### Installation
1. Access the repository [calculator-testing-project](https://github.com/Marcela1523/calculator-testing-project)
2. Click on "Code" button
3. Select the way you would be cloning the repository
4. Copy the link
5. Open a new terminal
6. Change your location to the desired destination folder
7. Execute the following command replacing copied_url with the link previously copied
```
git clone copied_url
``` 
8. Install all dependencies
```
yarn install
```
<br/>

### Running the tests
To use the already included script that executes all scenarios in chrome browser run:
```
yarn run test
```
It will execute "yarn run bddgen" which generates the playwright tests based on the features and step files created.
Then "yarn run playwright --project=chrome" that lauches the tests in chrome browser.
<br/>

If you want to trigger all the scenarios in Chrome, Chromium, Firefox and Safari you need to execute the following script:
```
yarn run cross-browsing-testing
```

By defeault everything will be running in headless mode, in case you would like to execute it in headed mode use **--headed**. See below example:
```
yarn run test --headed
```
<br/>

### Reporting
When the execution has been completed, you can see the html report opening **playwright-report/index.html** file. 

It will include a screenshoot, trace and video of each failed scenario for debugging purposes.
<br/>
<br/>
![alt text](/assets/reporting.png)

## How is this project structured?
The project structure is as follows: 
- /.features-gen: This folder is auto-generated after running **yarn bddgen**.
- /assets: Includes images of the README.md file.
- /node_modules: Contains all dependencies, and it's created after running **yarn install**.
- /playwright-report: Auto-generated after each test run, includes the html report, and if any test fails it will have its trace, screenshot and video.
- /test-results: Auto-generated folder with the json test run report.
- /tests/features: Including all the feature files. Please note each feature file have scenario outline and some examples commented to reduce the execution time.
- /test/fixtures: Containing the fixture file.
- /test/pom: It has the Page Object Model for the calculator components used.
- /test/step-definitions: This will have all the step definitions files, as of now it only includes one.
- .gitignore: File to ignore auto-generated folders/files.
- package.json: Includes important metadata of this project.
- playwright.config.ts: Playwright test configuration file. 
- README.md: This files includes a brief explanation of the project.
- yarn.lock: For tracking the versions of each dependency installed. 


![alt text](/assets/structure.png)
