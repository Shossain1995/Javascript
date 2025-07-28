
// 4. এমন একটি সিস্টেম ডেভেলপ করুন যেখানে ইউজার।
// ১) ১ প্রেস করলে ইনপুট পাসওয়ার্ড নিবে ১২৩৪ ও তারপর ভেতরে প্রবেশ করে যদি আবারো ১ প্রেস করে তাহলে সে তার নিজের নাম, বাবার নাম ও গ্রাম
// ii) ইনপুট নিবে তারপর রেজিস্ট্রার সফল বলবে, অথবা সে যদি ২ প্রেস করে চাপে মেডিসিন বিল ইনপুট নিবে ও কেবিন বিল সহ সার্ভিস চার্জ এবং এক্সট্রা ১০০ টাকা সহ টোটাল ক্যালকুলেট করে সে ডিসপ্লেতে শো করবে।
// আবার যদি কেউ প্রেস দেয় ২ তাহলে সে লগ-আউট হয়ে যাবে,

// অ্যালগরিদম (Algorithm)

// 1 চাপলে লগইন / রেজিস্ট্রেশন        2 চাপলে বিলিং সিস্টেম

// Step 3: ইউজারের ইনপুট নাও → choice     Step 4: choice এর জন্য switch চালাও –

// Case 1: (Login/Register)
// Step 4.1: ইউজার থেকে পাসওয়ার্ড ইনপুট নাও।
// Step 4.2: যদি পাসওয়ার্ড = 1234 হয় → লগইন সফল মেসেজ দেখাও।
// Step 4.3: এরপর ভেতরের মেনু দেখাও:

// 1 চাপলে রেজিস্ট্রেশন

// 2 চাপলে লগ-আউট

// Step 4.4: আবার ইউজারের ইনপুট নাও → innerChoice

// Nested Switch for innerChoice:
// Case 1: ইউজারের নাম, বাবার নাম, গ্রামের নাম ইনপুট নাও → সফল মেসেজ দেখাও।

// Case 2: লগআউট মেসেজ দেখাও।

// Default: ভুল অপশন দেখাও।

// Case 2: (Billing)
// Step 4.5: ইউজার থেকে নিচের ইনপুটগুলো নাও:

// মেডিসিন বিল

// কেবিন বিল

// সার্ভিস চার্জ

// Step 4.6: টোটাল বিল হিসাব করো:

// total = medicineBill + cabinBill + serviceCharge + 100
// Step 4.7: টোটাল বিল দেখাও।

// Step 4.8: আবার ইউজারকে বলো 2 চাপলে লগআউট।
// যদি 2 চাপ দেয় → লগআউট মেসেজ দেখাও।

// Default Case:
// Step 4.9: যদি প্রথম ইনপুট 1 বা 2 না হয় → "Invalid Input" দেখাও।

// Step 5: প্রোগ্রাম শেষ করো।


var userinput=prompt("press 1 Login || press 2 Billing");

switch(userinput){
    case '1':
        alert("You are login");

        var password=prompt("Inter password");

        if(password==='1234'){
            alert("Login successfully");

            var innerChoice=prompt("press 1 Form fill up || press 2 logout");

            switch(innerChoice){
                case '1':
                    alert("Fill in the information box");
                    var username=prompt("User name");
                    var father=prompt("Your Father Name");
                    var village=prompt("Village name");

                     alert("Registration Successful!\nName: " + username + "\nFather: " + father + "\nVillage: " + village);

                    var logout=prompt("press 2 logout");

                        alert("You are logout Now");

                    break;

                case'2':
                    alert("You are logout");
                    break;
                default:
                    alert("Incorrect Option");
                    break;
            }


        }else{
            alert("Incorrect Possword");
        }
        break;

     case '2':
       
        var medicalbill=parseInt(prompt("medicalbill amount"));
        var servicebill=parseInt(prompt("servicebill amount"));
        var cabinbill=parseInt(prompt("cabinbill the amount"));

        var totalbill=medicalbill+servicebill+cabinbill-100;

        alert("Total Bill (including extra 100): " + totalBill);

        var logout=prompt("press 2 logout");
         alert("You are logout Now");

        break;

    default:
        alert("Invaid Input");
}