//4. Write a function that takes an object as an argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// Test Cases:
// myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' })
// Expected
// { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }
// myFunction({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young' })
// Expected
// { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }
// myFunction({ Berlin: 'city', Germany: 'country' })
// Expected
// { city: 'Berlin', country: 'Germany' }

function myFunction(obj) {

    //create new obj
    let swapObj = {};

    //loop and swap key and value
    for(var key in obj){
        swapObj[obj[key]] = key;
      }

    //return new obj
    return swapObj;
}

console.log(myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' }));
console.log(myFunction({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young' }));
console.log(myFunction({ Berlin: 'city', Germany: 'country' }));