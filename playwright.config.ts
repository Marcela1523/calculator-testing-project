import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    //Define the test directory 
    testDir: 'tests',
    //Run test paralelly
    fullyParallel: true,
    //Define number of retries after a test failure
    retries: 0,
    //Reporting options
    reporter: [
        //Generates a html page with test results
        ['html', {
            open: 'never'
        }],
        //Save the test results in json format
        ['json', {
            outputFile: 'test-results/test-result.json'
        }]
    ],
    use: {
        headless: false,
        //Define a base url
        baseURL: 'https://www.google.com/',
        //Define the custom test id attribute
        testIdAttribute: 'jsname',
        //Saves the trace, screenshot and video only on when tests fail
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',

        //Set the implicit wait of navigation to 3 seconds
        navigationTimeout: 5000
    },

    //Browsers used
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }, 
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'safari',
            use: { ...devices['Desktop Safari'] }
        },
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' }
        }
    ]
});