// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Variable Assignment - (let)
// Challenge
// Now let's try declaring a variable with the let keyword. On line 3, declare a variable favFood using let and then assign it a value of the string "tacos". Now you can uncomment out line 6 to test your code. You should see "My favorite food is tacos" in your console.

// But wait! Maybe tacos aren't YOUR favorite food. Luckily, since we declared our variable, favFood, using the let keyword, we can reassign it's value to something different!

// The best part is we don't have to declare the variable again. All we need to do is reassign it's value. Check out the example below:

// let lastName = "Snow";
// console.log(lastName); // => Snow
// lastName = "Targaryen";
// console.log(lastName); // => Targaryen
// On line 9, let's change the value of favFood to whatever your favorite food is. Next, uncomment the console.log on line 12 to check your code. You should see "No, but really, my favorite food is " in the console below.

// CONGRATULATIONS! You just made your first variable reassignment!

// ========================== SOLUTION ==========================
// ====================================================================

// Declare a variable favFood and assign it a value of "tacos"
// ADD CODE HERE
let favFood = 'tacos';

// Try un-commenting the line below to test your answer
console.log('My favorite food is ' + favFood);

// ADD CODE HERE
favFood = 'home food';

// Uncomment the line below to check your work!
console.log('No, but really, my favorite food is ' + favFood);
