import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/PageManager'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('Search with Exactly Match Keyword', async ({ page }) => {
    const pm = new PageManager(page);

    const keyword = 'Áo thun ôm xếp ly vai'

    await pm.navigateTo().searchPage();
    await pm.onSearhPage().enterKeywords(keyword)
    await pm.onSearhPage().closeOverlay(3)
    await pm.onSearhPage().clickSearchButton()

    const result = page.locator('//div[@id="search-result"]')

    await expect(result).toContainText(keyword)
});

test('Search with Keyword', async ({ page }) => {
    const pm = new PageManager(page);

    const keyword = 'váy'

    await pm.navigateTo().searchPage();
    await pm.onSearhPage().enterKeywords(keyword)
    await pm.onSearhPage().closeOverlay(3)
    await pm.onSearhPage().clickSearchButton()

    const result = page.locator('//div[@id="search-result"]')

    await expect(result).toContainText(keyword)
});

test('Search with Special Characters', async ({ page }) => {
    const pm = new PageManager(page);

    const keyword = '##$%%^%*%*'

    await pm.navigateTo().searchPage();
    await pm.onSearhPage().enterKeywords(keyword)
    await pm.onSearhPage().closeOverlay(3)
    await pm.onSearhPage().clickSearchButton()

    const result = await pm.onSearhPage().getElementWithXpath('//div[@id="search-result"]')

    await expect(result).toContainText(keyword)
});

test('Search with Numbers Only', async ({ page }) => {
    const pm = new PageManager(page);

    const keyword = '12345'

    await pm.navigateTo().searchPage();
    await pm.onSearhPage().enterKeywords(keyword)
    await pm.onSearhPage().closeOverlay(3)
    await pm.onSearhPage().clickSearchButton()

    const result = await pm.onSearhPage().getElementWithXpath('//div[@id="search-result"]')

    await expect(result).toContainText(keyword)
});