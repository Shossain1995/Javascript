// problem solving : revese digit like 123.. is...321
var num=123;
var sum=0, rem;

while(num!=0){
    rem=num%10;
    sum=sum*10+rem;
    num=Math.floor(num/10);
}

document.write(sum);

