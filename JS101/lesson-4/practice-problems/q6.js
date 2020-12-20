let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/*  Array.prototype.fill works with up to 3 arguments. The first argument is the
    value elements are changed to, while the 2nd and 3rd elements are the
    starting and ending value for the reassignment. This method is destructive
    and we can test it out by calling 'arr' again to see if it
    matches the original array we assigned to arr.
*/
