/*
In the function we can return the value if specific condition has been met//fullfilled however in the for loop there is not return keyword and we can achieve similar functiontality using break keywoard, unfortuntely break is not always recomended as it can sometimes cause us strange issues. Although most likely whenever we use for loop it will be inside of the function there is simple trick to break from the loop without using break. We do it by assigning our variable i to Ininity - Capital I => i = Infinity or i = 1 / 0 as dividing by 0 is Inifnity in JavaScript
*/

// ===================== USING BREAK KEYWORD =====================
// =================================================================

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// for (let i = 0; i < arr1.length; i++) {
// 	const num1 = arr1[i];
// 	for (let j = 0; j < arr2.length; j++) {
// 		const num2 = arr2[j];
// 		if (num2 + num1 === 4) {
// 			console.log('winner');
// 		}
// 		break;
// 	}
// }

// ===================== ASSIGNIGN OUR VARIABLE TO INFINITY =====================
// =================================================================

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
for (let i = 0; i < arr1.length; i++) {
	const num1 = arr1[i];
	for (let j = 0; j < arr2.length; j++) {
		const num2 = arr2[j];
		if (num2 + num1 === 4) {
			console.log('winner');
			i = 1 / 0;
		}
	}
}
