import { Locator, Page } from '@playwright/test'
import { HelperPage } from './helperBase';

export class LoginPage extends HelperPage {
  //private readonly BTN_SIGN_IN = 'Đăng Nhập'

  private readonly BTN_SIGN_IN: Locator
  private readonly TXT_EMAIL: Locator
  private readonly TXT_PWD: Locator


  constructor(page: Page) {
    super(page)
    this.BTN_SIGN_IN = page.getByRole('button', { name: 'Đăng nhập', exact: true });
    this.TXT_EMAIL = page.getByRole('textbox', { name: 'Email', exact: true })
    this.TXT_PWD = page.getByPlaceholder('Mật khẩu')
  }

  async enterUserDetails(email: string, password: string) {
    await this.waitForNumberOfSeconds(1)
    await this.TXT_EMAIL.fill(email)
    await this.waitForNumberOfSeconds(1)
    await this.TXT_PWD.fill(password);
  }

  async clickSignInButton() {
    //await this.clickElementByBtnRole(this.BTN_SIGN_IN)
    //await this.clickElement(this.BTN_SIGN_IN)
    await this.BTN_SIGN_IN.click()
  }
}