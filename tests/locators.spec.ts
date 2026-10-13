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
        parenttagName >> childtagName (or) parentlocaor childelocator
        #parentname(Attribute / Value) div  (or) #ParentName #id
        provide space b/w parent and child 

    E. Locator - based on text
        text b/w tags
        <h1>Email</h1>


*/