import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.getByRole("button", { name: "aaa" }).click();
});
