import { test } from '@playwright/test';
import { PageManager } from '../pages/PageManager'

test.beforeEach(async({page}) =>{
  await page.goto('/')
})

