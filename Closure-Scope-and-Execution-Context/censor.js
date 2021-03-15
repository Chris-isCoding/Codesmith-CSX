// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: censor

Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function censor() {
// 	const strings = [];
// 	return function (str1, str2) {
// 		if (str2) {
// 			const pairs = {};
// 			pairs[str1] = str2;
// 			strings.push(pairs);
// 			// console.log(pairs)
// 		}
// 		// console.log(strings)
// 		if (!str2) {
// 			const replaceStrings = (arrOfPairs, string) =>
// 				arrOfPairs.reduce(
// 					(string, ele) =>
// 						string.replaceAll(Object.keys(ele), ele[Object.keys(ele)]),
// 					string
// 				);
// 			return replaceStrings(strings, str1);
// 		}
// 	};
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// function censor() {
// 	const strings = [];
// 	return function (str1, str2) {
// 		if (str2) {
// 			const pairs = {};
// 			pairs[str1] = str2;
// 			strings.push(pairs);
// 		}
// 		if (!str2) {
// 			const replacer = (arrOfPairs, string) =>
// 				arrOfPairs.reduce((string, ele) => {
// 					return string.replaceAll(
// 						Object.entries(ele)[0][0],
// 						Object.entries(ele)[0][1]
// 					);
// 				}, string);
// 			return replacer(strings, str1);
// 		}
// 	};
// }

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function censor() {
// 	const strings = [];
// 	return function (str1, str2) {
// 		if (str2) {
// 			const pairs = {};
// 			pairs[str1] = str2;
// 			strings.push(pairs);
// 		}
// 		// console.log(strings)
// 		if (str2 === undefined) {
// 			return strings.reduce(
// 				(str1, ele) => str1.replaceAll(Object.keys(ele), ele[Object.keys(ele)]),
// 				str1
// 			);
// 		}
// 	};
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

function censor() {
	const pairs = {};
	return function (str1, str2) {
		if (str2) {
			pairs[str1] = str2;
		}
		if (!str2) {
			const reg = new RegExp(Object.keys(pairs).join('|'), 'g');
			return str1.replace(reg, function (match) {
				return pairs[match];
			});
		}
	};
}

// ========================== SOLUTION 5 ======================================
// ================================================================================

// function censor() {
//   const pairs = {};
//   return function(str1, str2) {
//     if (str2) {
//       pairs[str1] = str2;
//     } else {
//     for (const key of Object.keys(pairs)) {
//       str1 = str1.replaceAll(key, pairs[key])
//     }
//     return str1;
//     }
//   }
// }

// ========================== SOLUTION 6 ======================================
// ================================================================================

// const censor = () => {
// 	const pairs = {};
// 	return (str1, str2) =>
// 		str2
// 			? ((pairs[str1] = str2), undefined)
// 			: (Object.keys(pairs).forEach(
// 					(key) => (str1 = str1.replaceAll(key, pairs[key]))
// 			  ),
// 			  str1);
// };

// ========================== SOLUTION 7 ======================================
// ================================================================================

function censor() {
	const pairs = {};
	return function (str1, str2) {
		if (str2) {
			pairs[str1] = str2;
		} else {
			Object.keys(pairs).forEach((key) => {
				str1 = str1.replaceAll(key, pairs[key]);
			});
			return str1;
		}
	};
}

// ========================== SOLUTION 8 ======================================
// ================================================================================

// function censor() {
// 	const pairs = {};
// 	return function (str1, str2) {
// 		if (str2) {
// 			pairs[str1] = str2;
// 		} else {
// 			Object.keys(pairs).forEach((key) => {
// 				const regex = new RegExp(key, 'g');
// 				str1 = str1.replace(regex, pairs[key]);
// 			});
// 			return str1;
// 		}
// 	};
// }

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
changeScene('brown', 'red');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
