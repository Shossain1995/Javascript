// Solved the problem:Total sum of digit like 123....

// var num=246;
// var tmp=num;
// var sum=0 , rem;
// while(tmp!=0){
//     rem = tmp%10;
//     sum = sum+rem;
//     tmp= Math.floor(tmp/10);
// }

// document.write(sum);

var num=123;
// var tmp=num;
var sum=0, rem;

while(num!=0){
    rem =num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
}
document.write(sum);











































