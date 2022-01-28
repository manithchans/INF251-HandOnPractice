/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/
"use strict";

var today = new Date();
var mm = today.getMonth()+1;
var dd = today.getDate();
var yy = today.getFullYear();

console.log(`mm-dd-yyyy: ${mm}-${dd}-${yy}`);
console.log(`mm/dd/yyyy: ${mm}/${dd}/${yy}`);
console.log(`dd-mm-yyyy: ${dd}-${mm}-${yy}`);
console.log(`dd/mm/yyyy: ${dd}-${mm}-${yy}`);