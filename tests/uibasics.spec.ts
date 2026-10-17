import {test, expect} from "@playwright/test"

/*test("Handling input fields and click ing on element", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("username").fill("student")
    await expect(page.locator('#username')).toHaveValue('student')
    await page.locator('#password').fill('Password123')
    await expect(page.locator('#password')).toHaveValue('Password123')
    await page.locator('#submit').click()
    expect(page.locator("h1.post-title")).toBeVisible()
})*/

test("Radio button and checkbox", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //click() - select or click the element. Clicks again; may uncheck a checkbox. Does nothing; keeps it selected
    //check() - Ensures a checkbox or radio button is selected
    //uncheck() - uncheck the checkbox
    //toBeChecked() - to validating the Checkbox or Radio button selected/Checked or not
    //no.tobeChecked() - to validate the checkbox or raidobuton not selected
    const radiobtn = page.getByRole('radio', {name:'Female'})
    await expect(radiobtn).not.toBeChecked()
    await radiobtn.click()
    await expect(radiobtn).toBeChecked()

    const checkbox = page.getByRole('checkbox', {name :'Wednesday'})
    await checkbox.check()
    await expect(checkbox).toBeChecked()
    await checkbox.uncheck()
    await expect(checkbox).not.toBeChecked()
})
test("Getting Text from an element and from multipe elements", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    /*for single matching element
        1. textContent() - get text value from an element. even if element is disabled
        2. innerText() - get text value from an element only visible on the webpage */
    const Singletext = await page.locator("h3.post-title").textContent()
    console.log(Singletext)
    const Stext = await page.locator("h3.post-title").innerText()
    console.log(Stext)

    /*for smultiple matching element - it will return as Array format
        1. allTextContents() - get text value from an element. even if element is disabled
        2. allInnerTexts() - get text value from an element only visible on the webpage */
    const Multitext = await page.locator("h2.title").allTextContents()
    console.log(Multitext)
    const Mtext = await page.locator("h2.title").allTextContents()
    console.log(Mtext)
})