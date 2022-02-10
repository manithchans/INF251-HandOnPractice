// 2.  There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1, num2){
    console.log(`The remainder of ${num1}/${num2} is ${num1%num2}`);
}

remainder(1,3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);