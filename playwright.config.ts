import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    //features: 'tests/features/**.feature',
    features: 'tests/features/**.feature',
    steps: ['tests/step-definitions/**.steps.ts', 'tests/fixtures/**.ts' ]
});

export default defineConfig({
    //Define the test directory from bdd
    testDir,
    fullyParallel: true,
    retries: 0,
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
        headless: true,
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

    //Browsers
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