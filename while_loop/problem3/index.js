// problem:

var num=125;
var tmp=num;
var sum=0, rem;
while(tmp!=0){
    rem=tmp%10;
    sum=sum*10+rem;
    tmp=Math.floor(tmp/10);
}
if(num==sum){
    document.write(num+" is Palindrom "+sum);
}else{
    document.write(num+"  is not Palindrom "+sum);
}