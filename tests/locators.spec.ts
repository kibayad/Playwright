// https://testautomationpractice.blogspot.com/p/playwrightpractice.html
//https://practicetestautomation.com/practice-test
//https://demoqa.com/
// Locators - To identify the Elemnets on the web page
//1. CSS Seletctor
//2. xpath
//3. Playwright Specific locators method - (getBy Locators)

//to write a locator using CSS (or) xpath in playwright - page.locator()
    // 1st element matching     - page.locator().first()
    // last element matching    - page.locator().last()
    //nth index matching        - page.locator().nth(index)

/*  
    1. CSS Selector
        DOM - Document Object Model - <label> </label>(Tags)
        <tagName attribute="value">Content</tagName>
        Attribute - Attribute="Value"

        A. Attribute - id, 
            Locator
            tagName#idValue (or) #idValue (or) [id='Value']
            ex :- tagName<input> id - username(id = ' username')
            input#username (or) #username (or) id='username'    
        
        B. Attribute - class
            tagName.className (or) .classsName (or) [class='classValue']
            space b/w class name, it means 2 class names are there
            .className.className
            ex -  mr-sm-2 form-control
            . mr-sm-2.form-control

        C. write CSS based on any Attribute : []
            [attribute.'value']   (or)  tagName[attribute='value']

        D. Parent and child Element Locators
            parenttagName >> childtagName (or) parentlocaor childelocator(space b/w Parent and Child element)
            #parentname(Attribute / Value) div  (or) #ParentName #id
            provide space b/w parent and child 

        E. Locator - based on text
            text b/w tags
            <h1>Email</h1>

    2. Xpath - used to navigate and locate elements in an XML or HTML document
        a. Absolute xpath = / - complete path from root element to the target element
                ex - /html/body/div/div/section/section/h2 
        b. Relative xpath = // - Relative to a matching point in the document, without specifying the complete path from the Root
                ex - //*[@id='value']/h2 - * means - search from all

        X path locator Methods
            A. //*[@attribute='value'] - using *
                Ex - //*[@id='firstName']
            B. //tagName[@attribute='value'] - using tag Name
                Ex - //input[@id='firstName']
            C. (//*[@attribute='value'])[index]
                (//tagName)[index] - using index value
                    ex- (//input)[4]
            D. Parnet Child method - using / or // - write a value fully not partially
                //tagName(@attribute='Value')/tagName  - for parent and child
                //tagname(@attribute='Value')//tagName - for Grand child
                //tagName(@attribute='value')//folowing-sibling::tagName or tagname[index]- one sibiling to another sibiling
                //tagName(@attribute='value')//preceding-sibling::tagName or tagName[index] - going to previous sibling
                //tagName(@attribute='value')//parent or ancestor::*tagName    - using parent/ancestors
                //tagname[text()='value']  - using text value b/w tags
                //tagName[contains(text(),'value')]  - using some portion of the text value
    
    2. getBy Locators - playwright
        1.page.getByRole()
            -find the element based on its AIRA Role, and optionally, its accessible name.
            -Common roles include button, textbox, link, checkbox, heading, radio, and combobox
        2.page.getByText()
            -find the element by usng text value
        3.page.getByPlaceholder()
            -find the elemement by using placeholder
        4.page.getByTestId()
            -find the element by using data-testId
        5.page.getByAltText()
            -find the element by using "alt" (image) element 
        6.Page.getByTitle()
            -find the elements using the HTML "title" attribute
        7.page.getByLabel()
            -find the elements using "label"

        
*/