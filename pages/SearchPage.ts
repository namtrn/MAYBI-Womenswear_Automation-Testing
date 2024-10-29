import { Page } from '@playwright/test'
import { HelperPage } from './helperBase';

export class SearchPage extends HelperPage {

    // elemets on the page
    private readonly BTN_SEARCH_LABEL = 'search'
    private readonly LB_TXT_SEARCH = 'query'
    private readonly OVERLAY = '//div[contains(@class, "tw-bg-black/40")]'


    constructor(page: Page) {
        super(page)
    }

    async closeOverlay(timeout: number) {
        await this.waitForNumberOfSeconds(timeout)
        await this.page.locator(this.OVERLAY).click()
        //LogHelper.info(`Clicked element with X-Path: ${selector}`);
        console.log('Overlay of the search box has been closed.')
    }

    async enterKeywords(keywords: string) {
        await this.enterTextByLocator(this.LB_TXT_SEARCH, keywords)
        //await this.page.getByRole('textbox', { name: 'query', exact: true }).fill(keywords)
    }
    
    async clickSearchButton() {
        await this.clickElementByLabel(this.BTN_SEARCH_LABEL)
    }
}