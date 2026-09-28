// 1. Push() - add one or more elements (values) in end of the array
console.log(1);
let A = [1,2,3,4,5];
A.push(6,7,8,9,10);
console.log(A);
console.log(A.length);
console.log("\n");

// 2. push - for loop
console.log(2);
let AB = []
for (let i=0; i<10; i++){
AB.push(i)
console.log(AB);
console.log("length: " + AB.length);
}
console.log("\n");

// 3. Direct index - without using push
console.log(3);
AB[8] = 8;
console.log(AB);
console.log(AB.length)
console.log("\n");

// 4. Pop() - remove the last element from the array
console.log(4);
AB.pop()
console.log(AB);
console.log("length: " + AB.length);
console.log("\n");

// 5. UnShift() - add one or more elements to the beginning of the array
console.log(5);
AB.unshift(-4,-3,-2,-1,);
console.log(AB);
console.log("length: " + AB.length);
console.log("\n");

// 6. Shift() - remove the first element from the array
console.log(6);
AB.shift();
console.log(AB);
console.log("length: " + AB.length);
console.log("\n");

// 7. Splice() - add or remove elements from the array
console.log(7);
AB.splice(0,0,-5,-4); // Add
console.log(AB);
console.log("length: " + AB.length);
console.log("\n");

// 8. Splice() - remove elements from the array
console.log(8);
AB.splice(0,2); // Remove 2 elements starting from index 0
console.log(AB);
console.log("length: " + AB.length);
console.log("\n");

// 9. splice() - replace elements in the array
console.log(9);
AB.splice(0,2,-5,-4);
console.log(AB);
console.log("length: " + AB.length);
console.log("\n");  