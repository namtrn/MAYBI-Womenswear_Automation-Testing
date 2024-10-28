import { test } from '@playwright/test';
import { HelperPage } from '../pages/helperBase';
import { PageManager } from '../pages/PageManager'


test.beforeEach(async({page}) =>{
  await page.goto('/')
})


test('Valid Login', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('nguyenthilink09102000@gmail.com', 'linh0910')
  await pm.onLoginPage().clickSignInButton()

});
