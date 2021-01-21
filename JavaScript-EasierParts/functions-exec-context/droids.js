// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: droids
Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.

*/

// ========================== SOLUTION ======================================
// ================================================================================

// ======== FIRST SOLUTION ========
// ================================

// function droids(arr) {
//   let result;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'Droids') {
//       result = 'Found Droids!';
//     } else {
//       result = `These are not the droids you're looking for.`
//     }
//   }
//   return result;
// }

// ======== SECOND SOLUTION =======
// ================================

const droids = (arr) => {
	let result = '';
	let i = 0;
	while (i < arr.length) {
		result =
			arr[i] === 'Droids'
				? 'Found Droids!'
				: `These are not the droids you're looking for.`;
		i++;
	}
	return result;
};

// ======== THIRD SOLUTION =======
// ================================

// const droids = arr => {
//   let result = '';
//   for (let i = 0; i < arr.length; i++) {
//     result = (arr[i] === 'Droids') ? 'Found Droids!' : `These are not the droids you're looking for.`;
//   }
//   return result;
// }

// ======== FOURTH SOLUTION =======
// ================================

function droids(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'Droids') {
			return 'Found Droids!';
		}
	}
	return `These are not the droids you're looking for.`;
}

// Uncomment these to check your work!
const starWars = ['Luke', 'Finn', 'Rey', 'Kylo', 'Droids'];
const thrones = ['Jon', 'Danny', 'Tyrion', 'The Mountain', 'Cersei'];
console.log(droids(starWars)); // should log: "Found Droids!"
console.log(droids(thrones)); // should log: "These are not the droids you're looking for."
