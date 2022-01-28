/*
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/
"use strict";
(function print() {
    function convert(cels, far) {
        celToFar(cels);
        farToCel(far);
    }

    function celToFar(cels) {
        const far = ((cels *9)/5) + 32
       console.log(`${cels}°C is ${far}°F`);
    }

    function farToCel(far) {
        const cels = (far-32)*5/9;
        console.log(`${far}°F is ${cels}°C\n`);
    }

    convert(60,45);
    convert(-10,55);
    convert(70,-5);

})();