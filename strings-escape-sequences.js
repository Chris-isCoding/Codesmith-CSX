// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Strings - Escape Sequences
// What if you wanted to put a contraction inside of a string? For example, take a look at the folowing code block.

// const myString = 'Why doesn't this work';
// // => SyntaxError: Unexpected identifier
// Looks like the string is getting closed out by our (') in doesn't. Hmmmmm...what to do, what to do! Luckily JavaScript has this figured out for us! Take a look at this example:

// const myString = 'Why doesn\'t this work';
// console.log(myString) // => 'Why doesn't this work?'
// Notice how when we put the (\) in front of the (') it didn't end our string? This is called escaping the character. Anytime JavaScript sees a (\) inside of a string, it knows that the following character has a special meaning. Here is a list of some of the most common escape sequences:

// \' => single quote
// \" => double quote
// \\ => backslash
// \n => newline
// \r => carriage return
// \t => tab
// \b => backspace
// \f => form feed
// Notice that even a backslash itself has to be escaped in order to display inside a string as well. Now let's see what you can do!

// Challenge
// 1. Uncomment out lines 1 & 2. Hit the Run Code button. Notice how we are missing all those backslashes? Add the appropriate \'s so that the path prints to the console with the proper \'s where they belong.

// 2. Uncomment out lines 4 & 5. Hit the Run Code button. Uh Oh! We've got an error! Fix the heSaid string so that it doesn't throw and error and prints to the console properly.

// 3. Uncomment out lines 7 & 8. Hit the Run Code button. Uh Oh! Another error! Fix the sheSaid string so that it doesn't throw and error and prints to the console properly.

// ========================== SOLUTION ==========================
// ====================================================================

const path = 'C:\\Users\\Win\\Files\\javascript.js';
console.log(path);

const heSaid = 'He said, "Hey Foo!"';
console.log(heSaid);

const sheSaid = "My name ain't Foo!";
console.log(sheSaid);
