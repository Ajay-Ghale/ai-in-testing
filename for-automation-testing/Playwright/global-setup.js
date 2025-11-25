import { chromium, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { join } from 'path';

export default async () => {
  console.log('Global setup: Logging in and saving authentication state...');

  // Read credentials
  const credsArr = JSON.parse(readFileSync(join(__dirname, 'data/sauce.credentials.json'), 'utf8'));
  const user = credsArr.find(u => u.username === 'standard_user');

  // Launch browser and create context
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', user.username);
  await page.fill('[data-test="password"]', user.password);
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL(/.*inventory.html/);

  // Save logged-in state
  await context.storageState({ path: join(__dirname, 'data/auth.json') });
  await browser.close();
};