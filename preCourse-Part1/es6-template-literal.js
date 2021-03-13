// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Template Literal
// ES6 & Template Literal
// ECMAScript is a standardized version of JavaScript meant to unify the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the terms JavaScript and ECMAScript are interchangeable. ECMAScript 6 (ES6), released in 2015, brought about many new features to JavaScript which we will be exploring throughout this course. In this lesson we will focus on the template literal.

// Template literals are a special type of string that make creating complex strings so much easier. Template literals are created by surrounding text between opening and closing backticks (``). Inside a template literal, you're able to refer to variables or execute code by using ${}. Take a look at the following example:

// console.log(`10 + 25 = ${10 + 25}`) // => "10 + 25 = 35"
// By wrapping the calculation 10 + 25 in the ${}, we are able to calculate the total right there inside of the string. We can also refer to specific variables in a template literal as well:

// const firstName = 'Kyle';
// const greeting = `Hi, ${firstName}!`;
// console.log(greeting); // => "Hi, Kyle!"
// Template literals also remove the need for escaped characters and string concatenation in many case as well. If you hit return, tab, etc inside of a template it will format the string in that form for you! You can also inject multiple variables into the same string.

// const firstName = 'David';
// const lastName = 'Bowie';
// console.log(`My favorite artist is ${firstName} ${lastName}`)
// // => "My favorite artist is David Bowie"
// Challenge
// Declare 2 variables x & y, and set their values to any number you like. Next declare a constant solution which is a string that prints to the console like the example below:

// let x = 2;
// let y = 5;
// const solution = <insert your code here>;
// console.log(solution) // => "The sum of 2 and 5 is 7"
// Hint: Don't forget the backticks (``)!

// ========================== SOLUTION ==========================
// ====================================================================

// Declare 2 variables x & y that are Numbers
// Declare a string 'solution' that when printed to the console reads like:
// "The sum of <x> and <y> is <x + y>"
// ADD CODE BELOW
let x = 2;
let y = 5;

const solution = `The sum of ${x} and ${y} is ${x + y}`;
console.log(solution);
