// Let's put reduce to work with emulating map as well. Write a function that
// works like the map function from problem 2. This time, though, use
// Array.prototype.reduce to transform the input array.

function map(array, callback) {
  return array.reduce((accum, element) => {
    accum.push(callback(element));

    return accum;
  }, [])
}


let arr = [1, 3, 5, 7, 9];

map(arr, num => num * 2);
