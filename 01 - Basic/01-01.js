/*
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is :
Current time is :  PM :  : 
*/

"use strict";

var today = new Date();

(function getCurrentDay() {
    var day = today.getDay();
    var listOfDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("Today is :", listOfDay[day]);
})();

(function getCurrentTime() {
    var hour = today.getHours();
    var minute = today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes();
    var second = today.getSeconds() < 9 ? '0' + today.getSeconds() : today.getSeconds();
    var shift = hour < 12 ? "AM" : "PM";
    console.log(`Current time is: ${hour}:${minute}:${second} ${shift}`);
})();         