let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let newObj = {};

arr.forEach(subArray => {

  let key = subArray[0];
  let value = subArray[1];

  newObj[key] = value;
})

console.log(newObj);
newObj;
