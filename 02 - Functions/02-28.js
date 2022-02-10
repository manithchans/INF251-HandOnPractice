/*
Write a JavaScript program to pass a 'JavaScript function' as parameter.
*/

function hello(){
    return "Hello ";
}

function yourName(hello, name){
    return hello + name;
}

console.log(yourName(hello(),"Manith"));
console.log(yourName(hello(),"Hour"));
console.log(yourName(hello(),"AUPP"));