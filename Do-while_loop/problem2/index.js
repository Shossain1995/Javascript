// problem solve:factorial 

var n=parseInt(prompt("Inter a number"));
var fact=1;

do{
    fact *=n;
    n--;
}while(n>0)

    document.write(fact);





//     var n = parseInt(prompt("Enter a number"));
// var fact = 1;
// var i = n;
// var steps = "";

// do {
//     fact *= i;                 // multiply current number
//     steps += i;                // add current number to steps string

//     if (i > 1) {
//         steps += " × ";        // show multiply sign between numbers
//     }
//     i--;                       // decrease number
// } while (i > 0);

// document.write(steps + " = " + fact);
