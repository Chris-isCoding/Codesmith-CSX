// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Invoking Functions
Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

*/

// ========================== SOLUTION ======================================
// ================================================================================

let calls = '';

//JerryKramerGeorgeElaine

// The slice() function is less common than substring() and substr(). However, it has the best aspects of both substring() and substr(). Like substring(), the slice() function takes the start and end indices as parameters, and is not considered a legacy function. Like substr(), the slice() function supports negative indices.

// ========== FIRST SOLUTION =======================
// ====================================================

// function jerry(str) {
//   const funcNameCap = jerry.name[0].toUpperCase() + jerry.name.slice(1);
//   return str = funcNameCap + kramer(str) + george(str) + elaine(str);
// }

// function george(str) {
//   return george.name[0].toUpperCase() + george.name.slice(1);
// }

// function elaine(str) {
//   return elaine.name[0].toUpperCase() + elaine.name.slice(1);
// }

// function kramer(str) {
//   return kramer.name[0].toUpperCase() + kramer.name.slice(1);
// }

// ========== SECOND SOLUTION =======================
// ====================================================

// function jerry(str) {
//   str += 'Jerry';
//   return kramer(str);
// }

// function george(str) {
//   str += 'George';
//   return elaine(str)
// }

// function elaine(str) {
//   return str += 'Elaine'
// }

// function kramer(str) {
//   str += 'Kramer';
//   return george(str);
// }

// ========== THIRD SOLUTION =======================
// ====================================================

function jerry(str) {
	str += jerry.name[0].toUpperCase() + jerry.name.slice(1);
	return kramer(str);
}

function george(str) {
	str += george.name[0].toUpperCase() + george.name.slice(1);
	return elaine(str);
}

function elaine(str) {
	return (str += elaine.name[0].toUpperCase() + elaine.name.slice(1));
}

function kramer(str) {
	str += kramer.name[0].toUpperCase() + kramer.name.slice(1);
	return george(str);
}

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
