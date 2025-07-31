// problem: Sum of the N Number/ Squer a number.


// Step 1: Start
// Step 2: Input a number n...5
// Step 3: Initialize sum = 0 and i = 1
// Step 4: Repeat steps 5-6 using do-while loop until i <= n
// Step 5: Add n to sum → sum = sum + n
// Step 6: Increment i → i = i + 1
// Step 7: After loop ends, sum will be n²/5²
// Step 8: Display sum
// Step 9: Stop


var n=parseInt(prompt("Enter a number"));
var sum=0;
var i=1;
do{
    sum +=n;
    i++;
}while(i<=n)

document.write(sum);
