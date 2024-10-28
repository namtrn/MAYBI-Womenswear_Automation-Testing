import { Page  } from '@playwright/test'
import { LogHelper } from '../helpers/LogHelper'


export class HelperPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }

    async hoverToElement(selector: string) {
        try {
            await this.page.hover(selector);
            LogHelper.info(`Hovered element: ${selector}`);
          } catch (error) {
            LogHelper.error(`Failed to click element: ${selector}`, error as Error);
            throw error; // rethrow to fail the test
          }

    }

    async clickElementByText(selector: string) {
        try {
          //await this.page.locator('a', {hasText: "Đăng Nhập"}).click();
          await this.page.locator(`${selector}`).click()
          LogHelper.info(`Clicked element: ${selector}`);
        } catch (error) {
          LogHelper.error(`Failed to click element: ${selector}`, error as Error);
          throw error; // rethrow to fail the test
        }
    }

    async clickElementByBtnRole(selector: string) {
        try {
          await this.page.getByRole('button', { name: selector}).click();

          LogHelper.info(`Clicked element with role: Button and name: ${selector}`);
        } catch (error) {
          LogHelper.error(`Failed to click element with role: Button and name: ${selector}`, error as Error);
          throw error; // rethrow to fail the test
        }
    }

    async clickElementByLinkRole(selector: string) {
      try {
        await this.page.getByRole('link', { name: selector}).click();

        LogHelper.info(`Clicked element with role: Link and name: ${selector}`);
      } catch (error) {
        LogHelper.error(`Failed to click element with role: Link and name: ${selector}`, error as Error);
        throw error; // rethrow to fail the test
      }
  }


    
    
      async enterText(selector: string, text: string) {
        try {
          await this.page.fill(selector, text);
          LogHelper.info(`Entered text into: ${selector}, value: ${text}`);
        } catch (error) {
          LogHelper.error(`Failed to enter text into: ${selector}`, error as Error);
          throw error;
        }
      }
    
      async waitForElement(selector: string) {
        try {
          await this.page.waitForSelector(selector);
          LogHelper.info(`Waited for element: ${selector}`);
        } catch (error) {
          LogHelper.error(`Failed to wait for element: ${selector}`, error as Error);
          throw error;
        }
      }
    
    
      async selectFromDropdown(selector: string, value: string) {
        try {
          await this.page.selectOption(selector, value);
          LogHelper.info(`Selected value: ${value} from dropdown: ${selector}`);
        } catch (error) {
          LogHelper.error(`Failed to select value from dropdown: ${selector}`, error as Error);
          throw error;
        }
      }

}