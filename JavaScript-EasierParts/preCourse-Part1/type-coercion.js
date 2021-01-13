// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Type Coercion
// Look at the console.log statements for this challenge. What do you think will be logged to the console? When you have an idea, uncomment and run the code.

// What happened?

// console.log(10 + 5); // 15
// console.log("10" + 5); // 105
// The first statement adds the numbers as expected. But in the second statement, '105' is logged to the console. Notice the quotation marks wrapped around the number 10 in the console.log statement; this means that the value is a string. There are no quotation marks around the number 5.

// What happened is type coercion, an important concept in JavaScript. We can't add a string value and a number value together; instead, JavaScript "coerces" (changes) the number into a string and treats the + operator as an instruction to concatenate strings.

// console.log("10" + "5"); // 105
// console.log("10" + 5); // 105
// Challenge
// Uncomment the code and see what happens. Then, try it out yourself and make sure you really understand the concept.

// ========================== SOLUTION ======================================
// ================================================================================

// Uncomment the code below to test
console.log(10 + 5);
console.log('10' + 5);
console.log(5 + '10');
