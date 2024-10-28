import { Page } from '@playwright/test'
import { HelperPage } from './helperBase';

export class LoginPage extends HelperPage {
    private readonly BTN_SIGN_IN = 'Đăng Nhập' 


    constructor(page: Page) {
        super(page)
    }

    async enterUserDetails(email: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email)
        await this.page.getByPlaceholder('Mật khẩu').fill(password);
      }
    
      async clickSignInButton() {
        await this.clickElementByBtnRole(this.BTN_SIGN_IN)
      }
}