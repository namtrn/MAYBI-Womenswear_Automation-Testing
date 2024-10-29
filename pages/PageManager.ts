import { Page } from "@playwright/test";
import { NavigationPage } from "./navigationPage";
import { LoginPage } from "./LoginPage";
import { SearchPage } from "./SearchPage"
import { AccountPage } from "./AccountPage";


export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly loginPage: LoginPage
    private readonly searchPage: SearchPage
    private readonly accountPage: AccountPage


    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.searchPage =  new SearchPage(this.page)
        this.accountPage =  new AccountPage(this.page)
    }

    navigateTo() {
        return this.navigationPage
    }

    onLoginPage() {
        return this.loginPage
    }

    onSearhPage() {
        return this.searchPage
    }

    onAccountPage() {
        return this.accountPage
    }
}