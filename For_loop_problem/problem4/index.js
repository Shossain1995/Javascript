// Write a JavaScript program for the Fibonacci series.

// var n=prompt("enter number");
// var fib=[0,1];

// for(let i=2; i <n ; i++){
//     fib[i]=fib[i-1]+fib[i-2];
// }

// document.write(fib);

var num1=0;
var num2=1;
var count=6;
var fib=0;
for(let i=2 ;i<=count;i++){
    fib=num1+num2;
    num1=num2;
    num2=fib;
    document.write(fib + " , ");
}