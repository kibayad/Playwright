// undefined - a avariable has been decleard but not aasigned a value yet
let Test
Test = "Hey"
console.log(Test)

// any - a variable can store any type of value
let J : any = 20
J = "ANY"
J = true
J = undefined
console.log(J)

// union - A variable can store multiple possible types
let un : number | string | undefined | boolean
un = 1
un = "hi"
un
un = false
console.log(un)

// void - does not return anything
function add(){
    console.log("does not return anything")
}

// never - never return anything
//1. throwing error
function throwerror() : never{
    throw new Error(" Something went wrong ")
} 
//2. Infinite loop
function infiniteLoop() : never {
    while (true){
        console.log("Running....")
    }
}

// unknown - value type not known
let value : unknown = 10
value = "String"
value = true
console.log(value)

// bigint - store very larg integer values
let big : bigint = 12345678901234567890n
console.log(big)

// symbol - unique value
let sym1 = Symbol()
let sym2 = Symbol()
console.log (sym1 === sym2)

// type
// syntax - Keywords Variable name = { value 1 : type,  value 2 : type}
type student = {
    name : string
    age : number 
}
let s1 : student = {
    name :"TS",
    age : 22
}
console.log(s1)

// interface
interface std {
    NA : string ,
    AG : number 
}
let s2 : std = {
    NA : " KK ",
    AG : 23
}
console.log(s2)