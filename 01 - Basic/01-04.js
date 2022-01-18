/*
 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 Heron's Formula
*/

function area(a, b, c) {
    return (a+b+c)/2
}

console.log("Area of Triangle ABC (a=5, b=6, c=7): ", area(5,6,7));