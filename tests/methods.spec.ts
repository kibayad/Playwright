import {test, expect} from '@playwright/test'

test.describe('Get By Methods', ()=>{

  test.beforeEach(async({page})=>{
    await page.goto("https://playwright.dev/docs/locators")
  })
  test("1.GetByRole", async({page})=>{
    //1.page.getByRole() - button, checkbox, radio, heading, textbox
      await expect (page.getByRole('heading', {name : 'Sign up'})).toBeVisible()
      await page.getByRole('checkbox', {name : 'Subscribe'}).check()
      await page.getByRole('button',{name : /submit/i}).click()

  })  

  })