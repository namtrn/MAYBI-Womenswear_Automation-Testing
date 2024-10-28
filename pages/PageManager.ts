import { Page } from "@playwright/test";
import { NavigationPage } from "./navigationPage";
import { LoginPage } from "./LoginPage";


export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly loginPage: LoginPage


    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.loginPage = new LoginPage(this.page)

    }

    navigateTo() {
        return this.navigationPage
    }

    onLoginPage() {
        return this.loginPage
    }
}