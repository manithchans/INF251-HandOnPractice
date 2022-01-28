/*
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
"use strict";
(function (pickedNumber) {
    pickedNumber = pickedNumber + "";
    console.log(`Original: ${pickedNumber}`);
	console.log(`Reversed: ${pickedNumber.split("").reverse().join("")}`);
})(32243);
