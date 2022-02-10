//5. Create a function that that calculates how old you are and displays the result.

function howOld(year){
    var age = new Date().getFullYear() - year;
    console.log(`You were born in ${year} so your age is ${age}.`);
}

howOld(2000);
howOld(1980);
howOld(1875);
howOld(2012);