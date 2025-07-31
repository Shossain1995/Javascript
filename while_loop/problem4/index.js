// problem solve: is a number is ArmStrong..153

var num=153; //9474...9⁴ + 4⁴ + 7⁴ + 4⁴ 
var tem=num;
 var sum=0, rem;

 while(tem!=0){
    rem=tem%10;
    sum=sum+rem*rem*rem;
    tem=Math.floor(tem/10);
 }

 if(num==sum){
    document.write(num+" The number is ArmStrong "+sum);
 }else{
    document.write(num+" The number is Not ArmStrong "+sum);
 }