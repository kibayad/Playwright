import {test, expect} from '@playwright/test'

test.describe('Login validation', ()=>{

  test.beforeEach(async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
  })
  test ("TC01 - Valid username and password", async function({page}){
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    expect(page.locator("h1.post-title")).toBeVisible()
  })
  test("TC02 - Invalid username", async({page})=>{
    await page.locator('#username').fill('Wrong')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
    await expect(page.locator('#error')).toContainText('Your username is invalid!')
  })
  test('TC03 - Invalid password',async({page})=>{
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('WrongPassword')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
    await expect(page.locator('#error')).toContainText('Your password is invalid!')
  })
  test('TC04 - Both credentials invalid',async({page})=>{
    await page.locator('#username').fill('Wrong')
    await page.locator('#password').fill('Wrong')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC05 - Empty username',async({page})=>{
    await page.locator('#username').fill('')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC06 - Empty password',async({page})=>{
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC07 - Both fields empty',async({page})=>{
    await page.locator('#username').fill('')
    await page.locator('#password').fill('')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC07 - Both fields empty',async({page})=>{
    await page.locator('#username').fill('')
    await page.locator('#password').fill('')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC08 - Username with leading space',async({page})=>{
    await page.locator('#username').fill(' student')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC09 - Username with trailing space',async({page})=>{
    await page.locator('#username').fill('student ')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC10 - Password with incorrect case',async({page})=>{
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC11 - Username with incorrect case',async({page})=>{
    await page.locator('#username').fill('Student')
    await page.locator('#password').fill('password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC12 - Password with leading space',async({page})=>{
    await page.locator('#username').fill('Student')
    await page.locator('#password').fill(' password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC13 - Password with trailing space',async({page})=>{
    await page.locator('#username').fill('Student')
    await page.locator('#password').fill('password123 ')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC14 - SQL injection-like username',async({page})=>{
    await page.locator('#username').fill("OR '1'='1")
    await page.locator('#password').fill('password123 ')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
  test('TC15 - Special characters in username',async({page})=>{
    await page.locator('#username').fill("!@#$%^")
    await page.locator('#password').fill('password123 ')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toBeVisible()
  })
})