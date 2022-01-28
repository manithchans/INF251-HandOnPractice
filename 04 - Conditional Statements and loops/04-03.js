/*
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4
Output : 4, 0, -1 
*/

function sort(a, b, c) {
    if (a < b && b < c)
        console.log(a, b, c);
    else if (a < b && c < b)
        console.log(a, c, b);
    else if (b < a && a < c)
        console.log(b, a, c);
    else if (b < a && c < a)
        console.log(b, c, a);
    else if (c < a && a < b)
        console.log(c, a, b);
    else
        console.log(c, b, a);

}


sort(0, -1, 4);
sort(10, -11, 4);
sort(6, -10, -20);