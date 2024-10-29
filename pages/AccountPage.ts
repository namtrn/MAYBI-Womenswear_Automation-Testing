import { Locator, Page } from '@playwright/test'
import { HelperPage } from './helperBase';

export class AccountPage extends HelperPage {
  //private readonly BTN_SIGN_IN = 'Đăng Nhập'

  private readonly TEN_TAI_KHOAN: Locator

  constructor(page: Page) {
    super(page)
    this.TEN_TAI_KHOAN = page.locator('//div[@id="b"]//strong');
  }

  getTenTaiKhoan() {
    return this.TEN_TAI_KHOAN
  }

}

