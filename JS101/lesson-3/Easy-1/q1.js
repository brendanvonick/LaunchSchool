let numbers = [1, 2, 3];
numbers[6] = 5;

/* The code will not raise an error. It will simply add elements 3-6, with the
value at element 6 being '5'.
*/

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/* This last line will return undefined because no value has been set for that
element yet.
*/
