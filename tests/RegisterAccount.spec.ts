import { test } from '@playwright/test';
import { HelperPage } from '../pages/helperBase';

test.beforeEach(async({page}) =>{
  await page.goto('/')
})

test('Sample test with logging', async ({ page }) => {
  const helpers = new HelperPage(page);

  await helpers.clickElement('#submit-button');
  await helpers.enterText('#username', 'test_user');
});
