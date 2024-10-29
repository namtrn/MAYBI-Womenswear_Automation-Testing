import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/PageManager'


test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Valid Login - emails has 21 chars', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('11111111111@gmail.com', '1111111111')
  await pm.onLoginPage().waitForNumberOfSeconds(2)
  await pm.onLoginPage().clickSignInButton()

  expect(pm.onAccountPage().getTenTaiKhoan()).toContainText('so mot')
});

test('Valid Login - emails has 50 chars', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('222222222222222222222222222222222222222@gmail.com', '22222222222222222222')
  await pm.onLoginPage().clickSignInButton()

  expect(pm.onAccountPage().getTenTaiKhoan()).toContainText('so hai')
});

test('Invalid Login - incorrect email', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('nguyenthi@gmail.com', 'linh0910')
  await pm.onLoginPage().clickSignInButton()

});

test('Invalid Login - incorrect password', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().loginPage();
  await pm.onLoginPage().enterUserDetails('nguyenthilink09102000@gmail.com', '0910')
  await pm.onLoginPage().clickSignInButton()
});






