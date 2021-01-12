// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: String Properties & Methods
// Find the Length of a String
// All data types in JavaScript come with some built in properties and methods which we can use to extract information or manipulate the data stored inside the variable. We'll dive into this concept more with each new data type we cover, but let's start with some of the more simple things we can do with strings.

// What if we wanted to find the length of a string? Wouldn't it be nice if we didn't have to sit and count each character ourselves? Luckily, strings in JavaScript have a built in length property that we can access by adding .length to the end of any string. Take a look at this example:

// const myString = "Howdy"
// console.log(myString.length) // => 5

// console.log("I love JavaScript".length) // => 17
// String Methods
// JavaScript methods are actions that can be performed on objects. We already know that all data types in JavaScript are inherently objects, but that also means that each data type comes with its own set of built in methods. A method is essentially a property containing a function definition.

// Two common string methods are toUpperCase and toLowerCase. We call these methods similarly to our length property, but in the case of methods, we need to add () to the end of the method name. Here is an example:

// const favArtist = "David Bowie"

// console.log(favArtist.toUpperCase()) // => "DAVID BOWIE"
// console.log(favArtist.toLowerCase()) // => "david bowie"
// For a list of all the string properties & methods in JavaScript, click here.

// Challenge
// 1. Declare a variable count and set its value equal to the length property of the string variable hometown.

// 2. Declare a variable upper and set its value equal to the string favAlbum converted to uppercase letters.

// 3. Declare a variable lower and set its value equal to the string favAlbum converted to lowercase letters.

// ========================== SOLUTION ==========================
// ====================================================================

let hometown = 'New York City';
let favAlbum = 'The Rise and Fall of Ziggy Stardust and the Spiders From Mars';

// ADD CODE BELOW
let count = hometown.length;
let upper = favAlbum.toUpperCase();
let lower = favAlbum.toLowerCase();

// Uncomment the line below to check your work!
console.log(count);
console.log(upper);
console.log(lower);
