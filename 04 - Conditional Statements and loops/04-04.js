/*
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1
Output : 0 
*/

function findLarge(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e)
        console.log(a);
    else if (b > a && b > c && b > d && b > e)
        console.log(b);
    else if (c > a && c > b && c > d && c > e)
        console.log(c);
    else if (d > a && d > c && d > b && d > e)
        console.log(d);
    else
        console.log(e);
}

findLarge(1,4,6,2,0);
findLarge(-1,-4,0,3,-5);
findLarge(-2,-1,-3,-9,-6);