// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Using forEach
Recreate the function droids from the previous challenge, but instead of using a FOR loop, use the built-in forEach method.

*/

// ========================== SOLUTION ======================================
// ================================================================================

function droids(arr) {
	let result = `These are not the droids you're looking for.`;
	arr.forEach((droid) => {
		if (droid === 'Droids') {
			result = `Found Droids!`;
		}
	});
	return result;
}

// Uncomment these to check your work!
const starWars = ['Luke', 'Finn', 'Rey', 'Kylo', 'Droids'];
const thrones = ['Jon', 'Danny', 'Tyrion', 'The Mountain', 'Cersei'];
console.log(droids(starWars)); // should log: "Found Droids!"
console.log(droids(thrones)); //should log: "These are not the droids you're looking for."
