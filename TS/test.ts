// 1. Single Line Stars
console.log("*")
console.log("\n")

// 2. Right Triangle Pattern 
for (let i=0;i<5;i++){
console.log("*".repeat(i))
}
console.log("\n")
// 3. Reverse Right Triangle
for(let j=5;j>=1;j--){
    console.log("*".repeat(j))
}
console.log("\n")
// 4. Square Pattern
for(let k=1;k<=5;k++){
    console.log("*".repeat(5))
}
console.log("\n")
// 5. Increasing Numbers
for (let p=1;p<=6;p++){
    let row ="";

    for (o=1;o<=p;o++){
        row +=o;
    }
    console.log(row);
}
console.log("\n")
// 6. Same Number Pattern
for(let u=1;u<=6;u++){
    let res="";

    for(let y=1;y<=u;y++){
        res +=u
    }
    console.log(res)
}
console.log("\n")
// 7. Reverse Number Pattern
for (let t=5;t>=1;t--){
    let rw ="";
    for(r=1;r<=t;r++){
        rw +=  r
    }
    console.log(rw)
}
console.log("\n")
// 8. Pyramid Pattern
for(let e=1;e<=6;e++){
    let sp=" ".repeat(6-e);
    let st="*".repeat(2*e-1);

    console.log(sp+st)
}
console.log("\n")
// 9. Inverted Pyramid
for (let w=6; w>=1;w--){
    let sd=" ".repeat(6-w)
    let sf="*".repeat(2*w-1)

    console.log(sd+sf)
}