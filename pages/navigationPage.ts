import { Locator, Page } from "@playwright/test";
import { HelperPage } from "./helperBase";


export class NavigationPage extends HelperPage {
    
    constructor(page: Page) {
        super(page)
    }

    private readonly ICON_ACCOUNT = '//*[@id="icon-account"]'
    private readonly SIGN_IN = '//*[@a="href=\'/account/login\'"]'
    private readonly link_SIGN_IN = '//*[@a="href=\'/account/login\'"]'

    async loginPage() {
        await this.hoverToElement(this.ICON_ACCOUNT)
        await this.clickElementByLinkRole('Đăng Nhập')
    }














    

    async formLayoutPage() {
        //await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
        await this.waitForNumberOfSeconds(2)
    }

    async datePickerPage() {
        //await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        //await this.page.waitForTimeout(2000)
        await this.waitForNumberOfSeconds(2)
        await this.page.getByText('Datepicker').click()
    }

    async smartTablePage() {
        //await this.page.getByText('Tables & Data').click()
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async toastrPage() {
        //await this.page.getByText('Modal & Overlays').click()
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async tooltipPage() {
        //await this.page.getByText('Modal & Overlays').click()
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    private async selectGroupMenuItem(selectItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(selectItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')

        if (expandedState == "false") {
            await groupMenuItem.click()
        }
    }
}