// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

 Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

 */

// ========================== FIRST SOLUTION ==========================
// ====================================================================

function closestToTheMark(player1, player2) {
	const theMark = Math.floor(Math.random() * 100);
	console.log(`If theMark is ${theMark}...`);
	if (player1 - theMark > player2 - theMark) {
		return 'Player 1 is closest';
	} else {
		return 'Player 2 is closest';
	}
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));
