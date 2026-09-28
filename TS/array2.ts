let A = [1,2,3,null, undefined, "Hello", true, false]
console.log(1)
console.log(A)
console.log(A.length)
console.log("\n")

A.push("F", 45) // 1. Push method
console.log(2)
console.log(A)
console.log(A.length)
console.log("\n")

A.unshift(0, 0.1,0.2, 0.9) // 2. Unshift
console.log(3)
console.log(A)
console.log(A.length)
console.log("\n")

A.pop() // 3. Pop method
console.log(4)
console.log(A)
console.log(A.length)
console.log("\n")

A.shift() // 4. Shift method
console.log(5)
console.log(A)
console.log(A.length)
console.log("\n")

console.log(6) // 5. for Loop - index and value
for(let i = 0; i <A.length; i++){
    console.log(i,A[i])
}
console.log("\n")

console.log(7) // 6. Reverse for Loop - value
for(let j = A.length - 1 ; j >=0; j--){
    console.log(A[j])
}
console.log("\n")

console.log(8) // 7. for .... of loop - return the values directly
for(let a of A){
    console.log(a)
}
console.log("\n")

console.log(9) // 8. for....in loop - return index/ keys
for (let index in A){
    console.log(index, A[index])
}
console.log("\n") 

console.log(10) // 9. While loop
let k = 0
while (k <A.length){
    console.log(k)
    k++
}
console.log("\n")
console.log(11) // 10. do..While loop
let l = 0
do{
    console.log(A[l])
    l++
}
while(l<A.length)