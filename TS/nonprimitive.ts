// 1. Array - StoreMultiple data of the same type
let NU : number [] = [1,2,3,4,5]
console.log(NU)

//2. Object - store data in key-value pair
let student: { name : string; age : number} = {
    name : "TEST",
    age : 25
}
console.log(student.name)
console.log(student.age)

//3. Tuple - array with fixed numbers of element with fixed types 
let person: [string,number]= ["Joker", 25]
console.log(person)

//4. Function - Function can also have a types
function  add(a:number, b:number) : number {
    return a+b }
console.log(add(10, 20))

// 5. Enum - enumeration - grop of named constant
// syntax - enum variable name {value 1, value 2, value 3}
enum Direction {
    Up,
    Right,
    Left,
    Down
}
let move = Direction.Up
console.log(move)
console.log(Direction[2])
