/*
Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
*/
"use strict";
for (var year = 2014; year <= 2050; year++) {

    //Date(year, month, date)
    var d = new Date(year, 0, 1);

    //day == 0 => it's Sunday
    if (d.getDay() === 0)
        console.log("1st January is being a Sunday in " + year + ".");
};