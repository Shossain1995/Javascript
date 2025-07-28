
// 3. এমন একটি সিস্টেম ক্যালকুলেটর বানান যেখানে ইউজার যদি ইনপুট দেয় তাহলে যোগ করবে পর্যায়ক্রমিক গুন, বিয়োগ ভাগ করবে শুধু মাত্র সুইচ ব্যাবহার করে



var operator=prompt("Inter These Operator(+,-,*,/)");
var num1 =parseInt(prompt("Enter num1"));
var num2 =parseInt(prompt("Enter nnum2"));
var result=0;

switch(operator){
    case '+':
        var result=num1+num2;
        document.write("The result of 2 num '+'= "+result);
        break;
     case '-':
        var result=num1-num2;
        document.write("The result of 2 num '-'= "+result);
        break;
     case '*':
        var result=num1*num2;
        document.write("The result of 2 num '*'= "+result);
        break;
     case '/':
        var result=num1/num2;
        document.write("The result of 2 num '/'= "+result);
        break;

        default :
            document.write("Invalid Operator");
        
}