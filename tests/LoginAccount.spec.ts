import { test } from '@playwright/test';
import { HelperPage } from '../pages/helperBase';
import { PageManager } from '../pages/PageManager'


test.beforeEach(async({page}) =>{
  await page.goto('/')
})


test('Valid Login - emails has 21 chars', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('11111111111@gmail.com', '1111111111')
  await pm.onLoginPage().clickSignInButton()

});

test('Valid Login - emails has 50 chars', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('222222222222222222222222222222222222222@gmail.com', '22222222222222222222')
  await pm.onLoginPage().clickSignInButton()

});

