/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
*/

const num1 = prompt('Enter 1st number: ');
const num2 = prompt('Enter 2st number: ');
const operation = prompt('Enter "*" to multiply and "/" to divide these 2 numbers: ');

if (operation == "*")
    console.log("Result:", num1 * num2);
else
    console.log("Result:", num1 / num2);