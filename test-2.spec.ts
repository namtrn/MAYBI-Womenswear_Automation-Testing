import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maybi.com/');
  await page.getByRole('link', { name: 'Đăng nhập' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('tvnam@gmail.com');
  await page.getByRole('textbox', { name: 'Email', exact: true }).press('Tab');
  await page.getByPlaceholder('Mật khẩu').fill('123345');
});