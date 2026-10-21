/*Mouse Operations
    1. clciking           - click()
    2. right  click       - click({button:"right"})
    3. Double clicking    - dblclick()
    4. Scrolling          - scrollIntoViewIfNeeded()
    5. Mosue Hover        - hover()
    6. Drag and Drop      - dragto()  or SourceLocator.dragto()
*/
//https://demo.guru99.com/test/simple_context_menu.html
import {test, expect} from"@playwright/test"

test("Double Click and Right Click Operation", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    //1. double click on element - dblclick()
    await page.getByText("Double-Click Me To See Alert", {exact : true}).dblclick()
    /* playwright automatically handles the alert/Popup. whenever there will be an alert/popup appears on the
     page that means there is an event gets called which is known as "dialog" */
   
    // 2. Right Clcik on element - click({button:"right"})
    await page.getByText("right click me").click({button:"right"})
})