
// Solve Must be required
// 1. একটি ব্যাংক একাউন্ট নাম্বার 1470982396 যদি এই নাম্বার ম্যাচ করে তাহলে লগিন করবে ও ম্যাসেজ প্রদর্শন করবে "তুমি লগিন করেছো" অন্যথায়ঃ "একাউন্ট নাম্বার ভুল" তার সাথে নিউ লাইন নিবে এবং লগিন করার পর তাহার ব্যালেন্স শো করবে ২৩০০০ টাকার বেশি (বিঃদ্রঃ ব্যালেন্স ইনপুট নিতে হবে)
// যদি ব্যালেন্স ২৩ হাজার এর বেশি হয় তাহলে সে ১০০০০ হাজার টাকা তুলে নিবে ও মূল ব্যালেন্স থেকে বিয়োগ হয়ে যাবে।
// পরবর্তীতে সেখান থেকে সে ২ প্রেস করলে লগ-আউট হয়ে যাবে, অপরপ্রান্তে যদি ২৩০০০ কম হয় তাহলে শুধু মূল ব্যালেন্স শো করবে।
// using only nested condition, বিঃদ্রঃ সব গুলো ইউজার ইনপুট নিবে।

// Algorithom: first input 1=login and 2= logout. 
//             if login show massage inter account number throw input.account    
//             after inter account inter balance is grater than 23000 -10000.


var UserInput=prompt("Press 1 LogIn || Press 2 LogOut.")

if(UserInput==1){
      document.write("User is Login <br>");
      var AccNo=prompt("Enter Acc No 1470982396");
      if(AccNo==1470982396){
            document.write("তুমি লগিন করেছো <br>");
            var balance=parseInt(prompt("Enter balance"))

            if(balance>23000){

                  document.write("<br> Your balance Is= "+balance+"<br> Youcan withdraw 10000 <br> Now your New Balance is = " +(balance-10000));
            }else{
                  document.write(" <br> Your current balance is"+balance+"<br> less than 23000 you cannot withdraw");
            }

      }else{
            document.write("একাউন্ট নাম্বার ভুল <br>");
      }

}else{
     document.write("User is LogOut"); 
}




















