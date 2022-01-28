/*
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *  

*/

for (var i = 0; i < 6; i++) {
    var star = "";
    for (var j = 0; j < i; j++)
        star += "* ";
    console.log(star);
}