/*1. string
let name = " Test "
let he = 'Test'
console.log(name +" " + he)

// 2. number
let num = 30
console.log(num)

// 3. boolean
let isActive = true
console.log(isActive)

// 4. Undefined
let A
console.log(A)

// 5. NUll
let j = null
console.log(j)

//6. symbol
let U1 = Symbol("Key")
let U2 = Symbol("Key")
console.log(U1===U2)

//7. Bigint
let h = 12345678901234567890n
console.log(h) */
let day;
switch (new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("today is " + day);