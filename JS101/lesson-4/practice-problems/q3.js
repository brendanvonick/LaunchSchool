[1, 2, 3].map(num => num * num);

// => [1, 4, 9]

/*  The mapped array is returned because it's a one-line callback function.
    Because it's one line and no curly braces are used, no return call is
    necessary. With variable 'num' representing each element of the array,
    map performs sqauring each variable and returning the new array.
*/
