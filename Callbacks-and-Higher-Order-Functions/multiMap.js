// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: multiMap

Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// arVa = array Of Values; arCa = array of Callbacks
function multiMap(arVa, arCa) {
	const obj = {};
	for (const ele in arVa) {
		obj[arVa[ele]] = arCa.map((func) => {
			return func(arVa[ele]);
		});
	}
	return obj;
}

// ========================== SOLUTION 2 ======================================
// ================================================================================

// function multiMap(valuesArr, arrayOfCallbacks) {
// 	const resultObj = {};
// 	for (const ele of valuesArr) {
// 		const valueOfKey = [];
// 		arrayOfCallbacks.forEach((callback) => {
// 			valueOfKey.push(callback(ele));
// 		});
// 		resultObj[ele] = valueOfKey;
// 	}
// 	return resultObj;
// }

// Uncomment these to check your work!
function uppercaser(str) {
	return str.toUpperCase();
}
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
	return str + str;
}
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
