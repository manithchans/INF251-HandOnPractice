/*
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is :
Current time is :  PM :  : 
*/

"use strict";

var today = new Date();

function getCurrentDay() {
    var day = today.getDay();
    var listOfDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   return listOfDay[day];
};

function getCurrentTime() {
    var hour = today.getHours();
    var minute = today.getMinutes();
    var shift = hour < 12 ? "AM" : "PM";
    return `${hour}:${minute} ${shift}`;
};         


console.log("Today is :", getCurrentDay());
console.log("Current time is :", getCurrentTime());