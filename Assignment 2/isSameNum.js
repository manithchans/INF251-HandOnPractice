// 4. Create a function that returns true when num1 is equal to num2; otherwise return false.
// Examples
// isSameNum(4, 8) ➞ false isSameNum(2, 2) ➞ true isSameNum(2, "2") ➞ false


function isSameNum(num1, num2){
    var isSame = num1 === num2 ? true : false;
    console.log(`isSame(${num1}, ${num2}) ➞ ${isSame}`);
}

isSameNum(4, 8);
isSameNum(2, 2);
isSameNum(2, "2");