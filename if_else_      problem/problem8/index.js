
// 2. where we need to analyse if the number is even or odd, and then if it is even, whether it is divisible by 4 or not, and if it is odd, whether it is divisible by 3 or not
// input: 14, output: even, not divisible by 4 N.B: using Nested condition


var num=prompt("Enter Number ");

if(num%2==0){
    document.write(num+" is Even Number <br>");

    if(num/4){
        document.write("divisible by 4 <br>");
    }else{
        document.write("Not divisible by 4 <br>");
    }
}else{
    document.write(num+" is Odd Number <br>");

    if(num/3){
         document.write(" divisible by 3 <br>");
    }
    else{
         document.write("Not divisible by 3 <br>");
    }
}