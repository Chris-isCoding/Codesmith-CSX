// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Constant Assignment - (const)
// Challenge
// Ok, so now that you have a hang of var and let, let's practice declaring a constant. As we metioned in the previous lesson, sometimes we want a variable who's value never changes. In this case we use the const keyword. For instance, take a look at the example below. My favorite TV show is Game of Thrones, and obviously that's never going to change, so I've declared a constant myFavoriteShow and assigned it a value of "Game of Thrones".

// const myFavoriteShow = "Game of Thrones";
// console.log(myFavoriteShow) // => "Game of Thrones"
// Maybe your favorite tv show changes quite often though, so here's a few more concrete examples of variables that won't ever change:

// const threeTimesFive = 15;
// const christmasDay = "December 25th"
// const myDateOfBirth = "02/23/1978"
// Now it's your turn. You're on a roll, and you're feeling good about it, so on line 3, declare a constant myCodingConfidence and assign it a value of "unwavering". Next, uncomment out line 6 to test your code!

// Now below line 8, let's try and reassign the value of myCodingConfidence to something else. After you've reassigned it, hit the Run Code button again and you'll know you did it right if you get the following error in the console:

// Type Error: Assignment to constant variable.
// Did you get the error message? Congratulations, you have successfully declared a constant!

// Now in order to pass the tests, you'll need to get rid of that error, so comment out line 9 where you attempted to reassign the variable and click the Check My Answer button below to run the tests!

// ========================== SOLUTION ==========================
// ====================================================================

// Declare a constant myCodingConfidence and assign it a value of "unwavering"
// ADD CODE HERE
const myCodingConfidence = 'unwavering';

// Try un-commenting the line below to test your answer
console.log('My confidence in my coding ability is ' + myCodingConfidence);

// ADD CODE HERE

// myCodingConfidence = 'not so good.';
