/*
Write a JavaScript function that returns array elements larger than a number.
*/


function returnLarge(arr, num) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

console.log(returnLarge([100,5,10,45,65],5));