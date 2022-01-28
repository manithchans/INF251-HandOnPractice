/*
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

"use strict";
(function () {
    function typeOfBinding(x) {
        return typeof x;
    }

    console.log(typeOfBinding(0));
    console.log(typeOfBinding("hello"));
    console.log(typeOfBinding(true));
    console.log(typeOfBinding(function hello(){}));
    let y;
    console.log(typeOfBinding(y));
})();
