//2. Write a function that takes an object as an argument. It should return an object with all original object properties but the property with key 'country'.

function myFunction(obj) {
    // this will delete key country then it will not be show in the output
    delete obj.country;

    //return obj without key "country"
    return obj;
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }));