/*Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is - 
*/

function findSign(a, b, c) {
    if (a*b*c >= 0)
        console.log("The sign is +");
    else
        console.log("The sign is -");
}

findSign(1,2,3);
findSign(-1,5,2);
findSign(-3,-7,10);