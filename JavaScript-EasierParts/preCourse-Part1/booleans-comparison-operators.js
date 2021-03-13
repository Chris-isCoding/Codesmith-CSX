// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Booleans: Comparison Operators
// Comparison Operators
// In programming, when working with data, we often need to compare different values. To do this, we use a series of operators called comparison operators. Check out this list of the most common comparison operators:

// < - Less than
// > - Greater than
// <= - Less than or equal to
// >= - Greater than or equal to
// == - Is loosely equal to
// === - Is strictly equal to
// != - Is not loosely equal to
// !== - Is not strictly equal to
// The first four are probably pretty familiar to you from primary school math class, but things start to get a little tricky when we talk about equality in JavaScript.

// First, we already know that a single equals sign (=) is used to assign value to a variable, so we can't use that to compare to values unfortunately.

// So let's start with loose equality (==). This operator is used to compare if 2 values have the same value, even if they aren't necessarily the same type.

//  1   ==  1        // true
// "1"  ==  1        // true
//  1   == '1'       // true

// true == true      // true
// true == 'true'    // false
// In the example above, all of these comparisons are true, because the value is the same even though they may have a different data type.

// For 2 values to be strictly equal (===) to each other, they need to not only have the same value, but also must have the same data type:

//  2   ===  2        // true
// "2"  ===  2        // false
//  2   === '2'       // false

// true === true      // true
// true === 'true'    // false
// Don't worry if this still seems a little confusing. We'll come back to it a bit more when we get to conditional statements in the second half of the precourse.

// Challenge
// For the following problems, you will be using the comparison operators (==, ===, <, >, <=, >=) to compare two variables and see if the comparison yields true or false. You will assign the resulting boolean to a variable. For example:

// let first = 7;
// let second = 8;

// let isFirstBigger = first > second;
// console.log(isFirstBigger); // should log: false

// first = 16;
// console.log(isFirstBigger); // should log: true
// 1. Compare small and large using the < operator. Assign the result to a variable called isSmaller.

// 2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a variable called isStrictlyEqual.

// 3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse.

// Continue to experiment with different comparison operators and data types. You can see a full list of comparison operators here.

// ========================== SOLUTION ======================================
// ================================================================================

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small < large;
// console.log(isSmaller);

// 2.
const num = 45;
const string = '45';
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num == string;
let isStrictlyEqual = num === string;
let isBigger = num > string;
// console.log(isLooselyEqual);
// console.log(isStrictlyEqual);
console.log(isBigger);

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isTrue !== isFalse;

// Uncomment these to check your work!
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?');
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);
