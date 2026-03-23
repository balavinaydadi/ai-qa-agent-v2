import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page } from "playwright";
import dotenv from "dotenv";
import { healLocator } from "../../healing/selfHealing";
import { ENV } from "../../framework/env";

dotenv.config(); // ✅ LOAD ENV

async function safeFill(page: any, locator: string, value: string) {
  try {
    await page.fill(locator, value);
  } catch (err) {
    console.log("⚠️ Locator failed, healing...");

    const html = await page.content();
    const newLocator = await healLocator(html, locator);

    console.log("🔁 New locator:", newLocator);

    await page.fill(newLocator, value);
  }
}
let page: Page;

Given("user navigates to login page", async function () {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();

  const url = process.env.BASE_URL;

  if (!url) {
    throw new Error("❌ BASE_URL is not defined in .env");
  }

  await page.goto(url);
});

When("user enters valid credentials", async function () {
 await safeFill(page, "#username", ENV.VALID_USERNAME);
await safeFill(page, "#password", ENV.VALID_PASSWORD);
});


When("clicks submit", async function () {
  await page.click("#submit");
});

Then("user should see success message", async function () {
  await page.waitForSelector(".post-title");
});