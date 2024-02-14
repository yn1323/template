import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3010/");
  await page.getByRole("button", { name: "aaa" }).click();
});
