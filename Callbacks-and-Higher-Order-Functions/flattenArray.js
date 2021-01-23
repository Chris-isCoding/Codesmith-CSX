const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

const bigArr = [arr1, arr2, arr3].reduce(function (accumulator, currentValue) {
	return accumulator.concat(currentValue);
}, []);
console.log(bigArr);
