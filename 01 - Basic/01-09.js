/*
Write a JavaScript program to calculate days left until next Christmas
*/
"use strict";
var today = new Date();
var christmas = new Date(today.getFullYear(), 11, 25);

//get time in millisecond from today till christmas
var timeleft = christmas.getTime() - today.getTime();

// duration perday in millisecond
var oneDay = 60*60*24*1000

var dayleft = Math.ceil(timeleft/oneDay);

console.log("There are", dayleft, "days left till Christmas!");