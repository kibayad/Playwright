/* if statement
let age = 20
if (age>18) {
    console.log("Adult")
}

// if else
let A = 10
if (A>20){ console.log("True")}
else {console.log("Fasle")}

// ternary
 let lk = 5
let result = lk >=18 ? "Adult" : " Minor"
console.log(result)

//if else if
let mark = 70
if (mark>90){console.log("A")}
else if(mark>80){console.log("B")}
else{console.log("Average")}

// switch
let day = 8
switch (day){
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break; 
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
    default : console.log("Invalid")
}
// for loop
let i
for(i=0; i<5; i++){console.log(i)}

// while loop
let k = 0
while (k<3){
    console.log(k)
    k++
}

// do while
let u = 0
do{console.log(u); u++}
while(u>4)

// break
let o
for(o =0; o<5; o++){
    if (o === 3) break;
    console.log(o);
}

//continue
let f
for(f=0; f<5; f++){
    if (f===2) continue;
    console.log(f)
}

//return
function add(a : number,b : number){
    return a+b;
}

// try catch
try {
    let result = 10/0;
} catch (errors){
    console.log("Errors Accured")
}

let Browser = "Chrome"

if (Browser === "Chrome"){
    console.log("Launch google Chrome Browse")
}
else if (Browser === " Safari "){
    console.log("Lanuch Safari Browser")
}
else if (Browser === "Edge"){
    console.log("Launch Edge Browser")
}
else(
    console.log("Invalid Response")
)*/
