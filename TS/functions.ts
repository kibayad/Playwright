/*function greed( ): void {
    console.log("Hello")
}
greed()*/

// Parameters
/*function Name(name:string) {
    console.log("Hello " + name)
}
Name("Test");*/

/*function add(a:number,b:number){
    console.log(a+b)
}
add(20,40);

// Return Function
function sub(a:number,b:number){
    return (a-b)
}
let result = sub(55,5)
console.log(result)

// Void
function test():void{
    console.log("Hi")
}*/

// Function Expression
let TST = function():void{
    console.log("Hi There")
}
TST();

// Arrow Function
const T=():void=>{
    console.log("hey");
}
T();

let multi = (M:number, J:number):number=>{
    return M*J;
}
console.log(multi(5,5));

// short Arrow
let d=(D:number,F:number):number=>D/F
console.log(d(20,2))

// Optional Parameters
function JJ(name?:string):void{
    console.log(name);
}
JJ();
JJ("testing");

//Rest Parameters
function sum(...numbers:number[]):number{
let total = 0;
for (let num of numbers){
    total += num
}
return total;
}
console.log(sum(20,20,30));

// Anonymous Function
setTimeout(function () {
    console.log("Hello");
}, 1000);

// Callback Function
function process(Callback:()=>void): void{
    Callback();
}
process(()=>{
    console.log("done")
}); 

// Recursive Function
function countDown(n:number):void{
    if (n===0){
        return;
    }
    console.log(n);
        countDown (n-1);
}
countDown(6);

// Function Overloading (TypeScript Only)
function display(value:string):void;
function display(value:number):void;

function display(value:any):void{
    console.log(value)
}
display("Hi Hello");
display(26);

// Higher Order Functions
function execute(fn: ()=> void):void{
    fn();
}
execute(()=>{
    console.log("Running")
});

// Immediately Invoked Function Expression
(function (){
    console.log("Executed")
})();

// this in Normal vs Arrow Functions
const person = {
    name: "TEST",

   ABC: function () {
        console.log(this.name);
    }
};

person.ABC();
