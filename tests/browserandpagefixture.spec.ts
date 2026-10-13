//browserandpagefixture.spec.ts
// Fixtures - A pre-Configured object or setup that playwright provides to test
/* Common Fixtures
    1. page    - Work with web page
    2. browser - Control the browser
    3. contaxt - Manage browser session/ context
    4. request - Send API request
*/
import {test, expect} from "@playwright/test"
test("Browser Fixture" ,async ({browser})=>{
    // it will not launch the Browser
    // Create a Browser Context/Instance
    // create a Page
    // Multiple pages can able to create a browser Fixture
    const context = await browser.newContext()// create a browser Instance
    const page = await context.newPage() // create a page on the context
    await page.goto("https://www.google.com/")

    const context1 = await browser.newContext()//different window will open instaed of new tab
    const page1 = await context1.newPage()
    await page1.goto("https://practicetestautomation.com/practice-test-login/")

    const page2 = await context.newPage()
    await page2.goto("https://playwright.dev/")
})
test("Page Fixture", async({page})=>{
    
<<<<<<< HEAD
})
=======
})
>>>>>>> d96e18c (login validation test cases)
