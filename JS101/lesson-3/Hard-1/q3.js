// A

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
'one is: one'
'two is: two'
'three is: three'

This is because the function has it's own scope of variables. The global
variables are defined after the function, the variables in the function shadow
the variables outside the function and do not change them.
*/

// B

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
'one is: ['one']'
'two is: ['two']'
'three is: ['three']'

This occurs because new variables are created inside the function, but they do
not affect the variables outside the function.
*/

// C

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
'one is: ['two']'
'two is: ['three']'
'three is: ['one']'

This happens because splice mutates the object, making javascript act as pass
by reference here, mutating the values the variables point to.
*/
