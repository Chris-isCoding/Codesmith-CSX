// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: wereAwesome
Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"

*/

// ========================== SOLUTION ======================================
// ================================================================================

function wereAwesome(you, yourBuddy) {
	return `${yourBuddy} and ${you} are awesome!`;
}

// Uncomment the lines below to test your function:
console.log(wereAwesome('Dave', 'Will')); // => "Will and Dave are awesome!"
console.log(wereAwesome('Victoria', 'Jenny')); // => "Jenny and Victoria are awesome!"
console.log(wereAwesome('Chris', 'Jac')); // => "Jac and Chris are awesome!"
console.log(wereAwesome('Phillip', 'Skyler')); // => "Skyler and Phillip are awesome!"
