function greet(name:string):void{
    console.log("Hi "+ name);
}
greet("Test ");
console.log("\n");

function add(h:number,j:number):void{
    console.log(h+j);
}
add(10,10);
console.log("\n");

function sub(a:number, b:number):number{
    return a-b;
}
let result = sub(20,10);
console.log(result);
console.log("\n");

let test = function(){
    console.log("Hi");
};
test();
console.log("\n");

const TST = () : void => {
    console.log("Hey");
};
TST();

let A = (g:number, f:number): number => { 
    return g+f;
};
console.log(A(30,40));
console.log("\n");

const ADD = (q:number, w:number):number =>q=w;
console.log(ADD(20,30));
console.log("\n");

function AD(b:number,n:number,c?:number):number{
return b+n+(c || 0);
}
console.log(AD(20,15));
console.log("\n");

function JA(name:string = "TS"): void{
    console.log("Hi "+ name);
}
JA();
JA("T");
console.log("\n");

function div(divi:number,divisor:number):number{
    return divi/divisor;
}
console.log(div(20,5));
console.log("\n");

function sum(...numbers:number[]):number{
    let total = 0;
    for(let num of numbers){
        total += num;
    }    return total; 
}
console.log(sum(10,20,30,40));
console.log("\n");

setTimeout (function(){
    console.log("Hi Hello");
}, 1000);
console.log("\n");

function runProcess(callback: () => void): void{
callback();
}
runProcess(() => {
    console.log("Done");
});
console.log("\n");

function countdown(n:number):void{
    if (n===0){
        return;
    }
    console.log(n);
    countdown(n - 1);
}
countdown(5);
console.log("\n");

function display(value:string):void;
function display(value:number):void;
function display(value:any):void{
    console.log(value);
}
display("Hello");
display(100);
console.log("\n");

function exe(fn:()=> void):void{
    fn();
}
exe(()=>{
    console.log("Executing function");
});
console.log("\n");

(function(){
    console.log("IIFE");
})();
console.log("\n");

const per={
    name:"T",
    G:function(){
        console.log("Hi "+ this.name);
    }
};
per.G();
console.log("\n");
