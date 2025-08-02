// The length property returns the length (size) of an array:

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.write(fruits[3]);
//     document.write(fruits.length);

//********************************** */


// The toString() method returns the elements of an array as a comma separated string.


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.write(fruits.toString());


//********************************** */

// ES2022 intoduced the array method at(): returns an indexed element from an array.


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   document.write(fruits.at(2));



//********************************** */
// join() behaves just like toString(), but in addition you can specify the separator:


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.join(" * "));


//********************************** */

// The pop() method removes the last element from an array: 
// returns the value that was "popped out": as "Mango";

//  var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.write(fruits.pop());


//********************************** */

// The shift() method removes the first element from an array: 
// returns the value that was "shifted out": as "Banana";


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.write(fruits.shift());


//********************************** */

// The push() method adds a new element to an array (at the end): 
// returns the new array length: as 5

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.write(fruits.push("Kiwi"));


//********************************** */

// The unshift() method adds a new element to an array (at the end): 
// returns the new array length: as 5


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.write(fruits.unshift("Lemon"));



//********************************** */

// The concat() method does not change the existing arrays. It always returns a new array.

// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];

// document.write(myGirls.concat(myBoys));




//********************************** */

//copyWithin() method copies array elements to another position in an array:

// var fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi","lemon"];
    // document.write(fruits.copyWithin(2,0));
    //Banana,Orange,Banana,Orange,Apple,Mango


    // document.write(fruits.copyWithin(2,0,2));
//Banana,Orange,Banana,Orange,Kiwi,lemon

//********************************** */
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// var myArr = [[1,2],[3,4],[5,6]];
//     document.write( myArr.flat());
// 1,2,3,4,5,6


//********************************** */


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
document.write(fruits);


//********************************** */



