// Write a JavaScript program for the Fibonacci series.

var n=prompt("enter number");
var fib=[0,1];

for(let i=2; i <n ; i++){
    fib[i]=fib[i-1]+fib[i-2];
}

document.write(fib);