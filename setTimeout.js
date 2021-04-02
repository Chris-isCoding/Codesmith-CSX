// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: setTimeout
Write code that will log to the console, 'I am at the beginning of the code'.

Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 600 ms.

Next, add code to the end of the challenge to log 'I am at the end of the code'. Now re-run the code.

Make sure the 'console' and 'output' panes are showing (click the tabs above if not) and then run your code with the 'run' button.

Clear the console. Change the delay time in the time from 600 ms to 0. Think hard about how the order should change and then run the code again.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

console.log('I am at the beginning of the code');
setTimeout(() => console.log(`I am in the setTimeout callback function`), 0);
console.log('I am at the end of the code');
