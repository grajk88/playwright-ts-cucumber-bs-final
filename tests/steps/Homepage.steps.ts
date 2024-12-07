const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");
import { BASE_URL } from '../utils/Environment';

import { Page } from '@playwright/test';
import { Browser } from '@playwright/test';

let page: Page;
let browser: Browser;

Before(async function () {

    browser = await chromium.launch({ headless: true });

    const context = await browser.newContext();

    page = await context.newPage();

});

Given("User navigates to the Browserstack Homepage", async () => {

    await page.goto(BASE_URL);

});

When('User clicks on Product Menu', async function () {

    await page.locator('button[aria-label="Products"]').waitFor();

    await page.locator('button[aria-label="Products"]').click();

});

Then('It should show Web Testing Product', async function () {

    await page.locator('div[aria-label="Products"] button[title="Web Testing"]').waitFor();

    expect(await page.locator('div[aria-label="Products"] button[title="Web Testijjjjng"] span').isVisible()).toBeTruthy()

});

Given('User Navigates to Browserstack Homepage', async function () {

    await page.goto(BASE_URL);

});

When('User clicks on Pricing Menuu', async function () {

    await page.locator('a[title="Pricing"]').click();

});

Then('It should Display correct Product lists in left Nav', async function () {

    var leftNavProducts = await page.locator('div[id="sidenav__list"]').textContent()

    // var productArray = await leftNavProducts.split("\n").map((item) => { return item.trim(); });

    // expect(productArray).toEqual(expect.arrayContaining(['Live', 'App Live']));

});

After(async function () {

    await browser.close();

})