[1, 2, 3].map(num => {
  num * num;
});

// [undefined, undefined, undefined]

/*  Map requires a return statement in the callback function when curly braces
    are used. There is no return statement here, so for each element, undefined
    is mapped to the array.
*/
