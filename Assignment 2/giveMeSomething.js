// 3. Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

function giveMeSomething(arg) {
    console.log(`something ${arg}`);
}

giveMeSomething("is better than nothing");
giveMeSomething("Bob Jane");
giveMeSomething("something");