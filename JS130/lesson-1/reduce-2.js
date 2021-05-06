// Array.prototype.reduce can be an incredibly useful function. You're not
// limited to simple accumulation-style processing, but can perform a wide
// variety of different tasks with it. For instance, you can emulate many of
// the standard Array methods, including filter, map, and more.
//
// Let's try it. Write a function that works like the filter function from
// problem 1. This time, though, you should use Array.prototype.reduce to
// filter the input array.


function filter(array, callback) {
  return array.reduce((accum, element) => {
    if (callback(element)) {
      accum.push(element);
    }

    return accum;
  }, [])
}


let arr = [1, 3, 5, 7, 9];

filter(arr, num => num > 3);
