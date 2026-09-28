/*let Array = [ 1,2,3,4, "test", undefined, null] ;

for (let i = 0; i<Array.length; i ++){
    console.log(Array[i])
}
console.log("\n")
for (let value of Array){
    console.log(value)
}
console.log("\n")
for(let index in Array){
    console.log(index)
}
console.log("\n")
Array.forEach((Arr =>{
    console.log(Arr);
})) 

let numbers = [10, 20, 30, 40, 50];
// 1.  break
for (let number of numbers) {

    if (number === 30) {
        break;
    }

    console.log(number);
}
console.log("\n")
/*numbers.forEach((number) => {

    if (number === 30) {
        break; // ❌ Error
    }

    console.log(number);
}); 
//2. Continue
for (let number of numbers) {

    if (number === 30) {
        continue;
    }

    console.log(number);
}
console.log("\n")
/*numbers.forEach((number) => {

    if (number === 30) {
        continue; // ❌ Error
    }

    console.log(number);
});
// Return
function test() {

    let numb = [10, 20, 30];

    for (let numbr of numb) {

        if (numbr === 20) {
            return;
        }

        console.log(numbr);
    }

    console.log("Finished");
}

test();
/*function test() {

    let numbers = [10, 20, 30];

    numbers.forEach((number) => {

        if (number === 20) {
            return;
        }

        console.log(number);
    });

    console.log("Finished");
}

test();*/
//       push Method - add one or more elements(Values) in the end
/*let AR = [2,4,6,8]
AR.push(10,12,14);
console.log(AR);
let Re = AR.push(16)
console.log(Re)*/

/*let Student : {Name : string ; Age : number;}[] = [
    {
        Name : "Hay",
    Age : 25
    }
];
Student.push({
    Name : "There",
    Age : 24
});
console.log(Student) 
console.log("\n")

let N [] = [];
for (let j = 0; j <= 6; j++){
N.push(j)}
console.log(N)
console.log("\n")

//       Direct Index  - Directly push the Values. not using push()
let NU = [1,2,3]
NU[3] = 4
console.log(NU) 
 
//     Unshift - Adds one or more values in the biginning
let A = [4,5,6,7]
A.unshift(1,2,3)
console.log(A)
console.log("\n")

//pop() - Remove from the end
A.pop()
console.log(A) 

let cart: string[] = [];

console.log("Initial Cart:");
console.log(cart);

console.log("\nAdding products...");

cart.push("Laptop");
console.log(cart);

cart.push("Mouse");
console.log(cart);

cart.push("Keyboard");
console.log(cart);

console.log("\nRemoving the last product...");

cart.pop();
console.log(cart);

console.log("\nAdding another product...");

cart.push("Monitor");
console.log(cart);

console.log("\nRemoving the last product...");

cart.pop();
console.log(cart);
console.log("\n")
let history: string[] = [];

history.push("google.com");
history.push("youtube.com");
history.push("github.com");

console.log(history);

history.pop();

console.log(history); */

// Splice - Add or remove the values anywhere 
// Add = arrayName.splice(Index, 0, value)
// Remove = arrayName.splice(Index,1)

let cart = ["laptop", 24, null, undefined]
cart.splice(2,0, "Monitor")
console.log(cart)
console.log("\n")
cart.splice(1,1)
console.log(cart)