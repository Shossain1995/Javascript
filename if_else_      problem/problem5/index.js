// 5. Find the largest number among three numbers
// Algorithm:
// Input three numbers

// Compare them and find the largest

// Output largest number

// function findLargest(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     console.log(num1 + " is biggest number");
//   } else if (num2 > num1 && num2 > num3) {
//     console.log(num2 + " is biggest number");
//   } else {
//     console.log(num3 + " is biggest number");
//   }
// }

// Example:
// findLargest(10, 20, 50);  // 50 is biggest number
// findLargest(99, 102, 9);  // 102 is biggest number


var num1=10, num2=20 , num3=30;

if(num1>num2 && num1>num3){
    document.write(num1+" is biggest number.");
}else if(num2>num1 && num2>num3){
     document.write(num2+" is biggest number.");
}else{
     document.write(num3+" is biggest number.");
}