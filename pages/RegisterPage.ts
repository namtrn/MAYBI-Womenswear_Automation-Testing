import { Page } from '@playwright/test'
import { HelperPage } from './helperBase';

export class RegisterPage extends HelperPage {
    constructor(page: Page) {
        super(page)
    }

    async enterUserDetails(name: string, email: string) {
        await this.page.fill('#name', name);
        await this.page.fill('#email', email);
      }
    
      async submitForm() {
        await this.page.click('#submit');
      }
}