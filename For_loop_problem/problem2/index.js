// 1. Write a JavaScript program to check if a number is prime or not.

// Start

// Take input num (the number to check).

// If num <= 1, print "Not Prime" and stop.

// Initialize flag = true.

// Loop i from 2 to √num:

// If num % i == 0:

// Set flag = false

// Break the loop

// If flag == true, print "Prime"; else print "Not Prime".

// End
var num= parseInt(prompt("Is a prime number"));
var isprime=true; //0

if(num<=1) isprime=false;
for(let i=2; i<=Math.sqrt(num); i++){
   if(num%i===0){
      isprime=false;
      break;
   }
}

// for(let i=2; i<=num;i++){
//    if(num%i===0){
//       isprime++;
//       break;
//    }
// }

if(isprime==0){
   document.write("Is a prime number");
}else{
   document.write("Is not a prime number");
}