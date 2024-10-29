import { Locator, Page } from '@playwright/test'
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

  async hoverToElement_2(locator: Locator) {
    try {
      await locator.hover();
      const text = await locator.textContent();
      const role = await locator.getAttribute('role');
      const id = await locator.getAttribute('id');
      LogHelper.info(`Hovered element with text: "${text}", role: "${role}", id: "${id}"`);
    } catch (error) {
      LogHelper.error(`Failed to hover element: ${locator.toString()}, error: ${error}`);
      throw error; // rethrow to fail the test
    }
  }

  // async clickElement(locator: Locator) {
  //   try {
  //     //await this.page.locator('a', {hasText: "Đăng Nhập"}).click();
  //     await locator.click()
  //     LogHelper.info(`Clicked element with Text: ${selector}`);
  //   } catch (error) {
  //     LogHelper.error(`Failed to click element: ${selector}`, error as Error);
  //     throw error; // rethrow to fail the test
  //   }
  // }

  async clickElement(locator: Locator) {
    try {
        await locator.click();
        const text = await locator.textContent();
        const role = await locator.getAttribute('role');
        const id = await locator.getAttribute('id');
        LogHelper.info(`Clicked element with text: "${text}", role: "${role}", id: "${id}"`);
    } catch (error) {
        LogHelper.error(`Failed to click element: ${locator.toString()}, error: ${error}`);
        throw error; // rethrow to fail the test
    }
}

  async clickElementByText(selector: string) {
    try {
      //await this.page.locator('a', {hasText: "Đăng Nhập"}).click();
      await this.page.locator(`${selector}`).click()
      LogHelper.info(`Clicked elemen with Text: ${selector}`);
    } catch (error) {
      LogHelper.error(`Failed to click element: ${selector}`, error as Error);
      throw error; // rethrow to fail the test
    }
  }

  async clickElementByLabel(selector: string) {
    try {
      //await this.page.locator('a', {hasText: "Đăng Nhập"}).click();
      await this.page.getByLabel(`${selector}`).click()
      LogHelper.info(`Clicked element with Label: ${selector}`);
    } catch (error) {
      LogHelper.error(`Failed to click element with Label: ${selector}`, error as Error);
      throw error; // rethrow to fail the test
    }
  }

  async clickElementByBtnRole(selector: string) {
    try {
      await this.page.getByRole('button', { name: selector }).click();

      LogHelper.info(`Clicked element with Button role and name: ${selector}`);
    } catch (error) {
      LogHelper.error(`Failed to click element with role: Button and name: ${selector}`, error as Error);
      throw error; // rethrow to fail the test
    }
  }

  async clickElementByLinkRole(selector: string) {
    try {
      await this.page.getByRole('link', { name: selector }).click();

      LogHelper.info(`Clicked element with Link role and name: ${selector}`);
    } catch (error) {
      LogHelper.error(`Failed to click element with role: Link and name: ${selector}`, error as Error);
      throw error; // rethrow to fail the test
    }
  }

  async clickElementByXPath(selector: string) {
    try {
      await this.page.locator(selector).click();

      LogHelper.info(`Clicked element with X-Path: ${selector}`);
    } catch (error) {
      LogHelper.error(`Failed to clickelement with X-Path: ${selector}`, error as Error);
      throw error; // rethrow to fail the test
    }
  }

  async enterTextByLocator(selector: string, text: string) {
    //*[contains(@name, 'query')

    try {
      await this.page.locator(`//*[contains(@name, '${selector}')]`).fill(text)
      //await this.page.locator
      LogHelper.info(`Entered text into: ${selector}, value: ${text}`);
    } catch (error) {
      LogHelper.error(`Failed to enter text into: ${selector}`, error as Error);
      throw error;
    }
  }


  async enterText(selector: string, text: string) {
    try {
      await this.page.getByRole('textbox', { name: selector }).fill(text)
      //await this.page.locator
      LogHelper.info(`Entered text into: ${selector}, value: ${text}`);
    } catch (error) {
      LogHelper.error(`Failed to enter text into: ${selector}`, error as Error);
      throw error;
    }
  }

  async getElementWithXpath(xpath: string) {
    var element

    try {
      element = this.page.locator(xpath);
      //await this.page.locator
      LogHelper.info(`Get the element with xpath: ${xpath}`);
    } catch (error) {
      LogHelper.error(`Failed to get the element with xpath: ${xpath}`, error as Error);
      throw error;
    }

    return element
  }


  async expectElement(locator: Locator, value: string) {
    LogHelper.info(`Verify Element text of ${locator.textContent} with value: ${value}`);

  }
}