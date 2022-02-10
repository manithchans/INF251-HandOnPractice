/*
Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5' 
*/

function br_search(array, key, start, end) {
	if (start >= end) {
		return -1;
	}

	let middle = Math.floor((start + end) / 2);

	if (array[middle] === key) {
		return middle;
	} else if (array[middle] < key) {
		return br_search(array, key, middle + 1, end);
	} else {
		return br_search(array, key, start, middle - 1);
	}
}

let arr = [0,1,2,3,4,5,6];
console.log(br_search(arr,5,0,arr.length-1));


let arr2 = [2,13,14,25,36];
console.log(br_search(arr2,14,0,arr2.length-1));