import {test, expect} from "@playwright/test"

test("Handling input fields and click ing on element", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("username").fill("student")
    await expect(page.locator('#username')).toHaveValue('student')
    await page.locator('#password').fill('Password123')
    await expect(page.locator('#password')).toHaveValue('Password123')
    await page.locator('#submit').click()
    expect(page.locator("h1.post-title")).toBeVisible()
})

test("Radio button and checkbox", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
})