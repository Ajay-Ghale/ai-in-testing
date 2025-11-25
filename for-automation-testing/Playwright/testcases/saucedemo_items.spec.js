const { test, expect } = require('@playwright/test');

const path = require('path');
test.use({ storageState: path.join(__dirname, '../data/auth.json') });

test.describe('smoke', () => {
  test('Login and retrieve item names and prices', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.waitForLoadState('networkidle');

    const items = await page.$$eval('.inventory_item', items =>
      items.map(item => ({
        name: item.querySelector('.inventory_item_name')?.innerText,
        price: item.querySelector('.inventory_item_price')?.innerText
      }))
    );

    console.log('Saved items:', items);
  });
});
