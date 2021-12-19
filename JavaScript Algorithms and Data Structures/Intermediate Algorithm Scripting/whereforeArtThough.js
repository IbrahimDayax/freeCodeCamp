console.time('Execution Time');

function whatIsInAName(collection, source) {
    const arr = [];
    const srcKeys = Object.keys(source);
    //use a recurring function to check if the objects in the collection array has 
    //all the properties and values in the source object
    const checker = (obj, prop, keyLength, index) => {
        if (index === keyLength) {
            return 1;
        } else {
            return obj.hasOwnProperty(prop[index]) && obj[prop[index]] === source[prop[index]] &&
                checker(obj, srcKeys, srcKeys.length, ++index);
        }
    }

    //push the object that has all the right properties and values to the new array
    arr.push(...collection.filter(obj => checker(obj, srcKeys, srcKeys.length, 0)));

    return arr;
}



console.timeEnd('Execution Time');
console.log(whatIsInAName(
    [
        { "apple": 1, "bat": 2 },
        { "apple": 1 },
        { "apple": 1, "bat": 2, "cookie": 2 },
        { "bat": 2 }
    ], { "apple": 1, "bat": 2 }));