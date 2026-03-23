import { test as base } from "@playwright/test";

export const test = base.extend({
  baseURL: "https://practicetestautomation.com/practice-test-login/",
});

export const expect = test.expect;