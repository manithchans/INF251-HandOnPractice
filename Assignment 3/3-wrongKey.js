// 3. Write a function that takes two objects as arguments.Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'


function myFunction(obj1, obj2) {

    // this method will replace the wrong/duplicate key in obj2
    obj2['city'] = obj2['country'];
    delete obj2['country'];

    // this method will merge the two object
    let newObj = {...obj1, ...obj2};

    //return new obj
    return newObj;
}

console.log(myFunction({continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' }));

console.log(myFunction({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' }));