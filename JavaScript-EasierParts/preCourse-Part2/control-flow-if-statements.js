// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Control Flow - if statements
Sometimes there are certain conditions that need to be met in order for an event to occur. Let's take dating as an example. If going out on a first date is a horrible experience, then there won't be a second date. If the first date is wonderful, then there will probably be a second date. We use this same kind of logic in programming.

Using an if statement, we can execute a block of code if the condition inside the parentheses is met.

if (5 > 2) {
  console.log("Math still works!"); // 'Math still works!'
}
If we wanted to chain more if statements together, we could use an else if block. In the example below, four is not less than two so we don't run the block of code inside the if statement. Next, we move to the else if statement. That condition is true, so the code runs.

if (4 < 2) {
  console.log("This shouldn't log");
} else if (4 > 2) {
  console.log("This should log"); // 'This should log'
}
You can also use an else statement to catch anything that your if and else if conditions don't meet.

let day = "Christmas";
if (day === "work day") {
  console.log("Time to go to work!");
} else if (day === "sick day") {
  console.log("Stay home and rest up!");
} else {
  console.log("Enjoy your holiday!");
}
In the code above we have specific conditions for sick days and work days. However, there are other days that have special conditions. We don't want to write a condition for every holiday; that would take too long. Instead we use an else block to catch those cases.

Challenge
Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const num = 40;
let final;
// ADD CODE HERE
if (num > 100) {
	final = null;
} else {
	final = 2 * num;
}

// Log final to the console below to check your work
console.log(final);
