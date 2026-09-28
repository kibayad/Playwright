import {test, expect} from '@playwright/test'

test ("Login Validation", async function({page}){
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.locator('#username').fill('student')
  await page.locator('#password').fill('Password123')
  await page.locator('#submit').click()
  expect(page)
})