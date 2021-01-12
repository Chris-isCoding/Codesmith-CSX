// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Numbers - Exponents & Remainders
// Two other really useful arithmetic operators we have access to in Javascript are the exponentiation operator (**) and the modulus (remainder) operator (%).

// The exponentiation operator (**) raises the first number to the power of the second number.

// 2 ** 2 = 4
// 2 ** 3 = 8
// 2 ** 4 = 16
// 4 ** 4 = 256
// The modulus (remainder) operator (%) returns the remainder of dividing the first number by the second number.

// 4 % 2 = 0
// 4 % 3 = 1

// 4 % 5 = 4
// In the first example, we get 0 because 2 divides evenly into 4, so there isn't a remainder. In the second, we have a result of 1 since 3 goes into 4 one time and then leaves us with a remainer of 1. The last example may seem a little tricky, but think of of it like this: 5 is larger than 4, so technically it can't go into 4 at all, so the remainder would be 4.

// Maybe you're asking yourself why would you need to use this? Well one common use is determining whether a number is even or odd. Since we know that even numbers are divisible by 2, then we can then say that if the remainder of dividing any number by 2 = 0, then it is an even number. Likewise, if the remainder is 1, then it is odd.

// 45 % 2 = 1 (45 is odd)
// 36 % 2 = 0 (36 is even)
// Challenge
// Now we're gonna take the training wheels off a bit now. This time you're going to have to write your own tests! Utilize the space below line 8 to write any console.log statements that you'd like to use to test your answers.

// 1. Declare a constant fiveSquared and assign it the value of 5 to the power of 2 using the exponentiation operator.

// 2. Declare a constant eightCubed and assign it the value of 8 to the power of 3 using the exponentiation operator.

// 3. Declare a constant sevenToTheSixth and assign it the value of 7 to the power of 6 using the exponentiation operator.

// 4. Declare a constant eightyThreeModSix and assign it remainder of dividing 83 by 6.

// 5. Declare a constant sixtyModNine and assign it the remainder of dividing 60 by 9.

// ========================== SOLUTION ======================================
// ================================================================================

// ADD CODE BELOW
const fiveSquared = 5 ** 2;
const eightCubed = 8 ** 3;
const sevenToTheSixth = 7 ** 6;
const eightyThreeModSix = 83 % 6;
const sixtyModNine = 60 % 9;

// ADD CONSOLE LOGS BELOW
console.log(fiveSquared);
console.log(eightCubed);
console.log(sevenToTheSixth);
console.log(eightyThreeModSix);
console.log(sixtyModNine);
