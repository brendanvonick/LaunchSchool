//  Consider the following code:

for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

//  Without running this code, what does it print?

//  This logs:
//  "undefined"
//  "Hello"
//  "Bye"
//  "1"

//  var defines variables with function scope. Thus they are hoisted to the top
//  of the function in which they are defined.. since there are no functions
//  here they get hoisted to the global scope and are available throughout the
//  program. This means the foo variable is available in the else clause, before
//  the initial if clause, and also outside of the for loop block. This also
//  means that the variable index is available outside of the for loop block,
//  and the final value after the for loop is what's logged from the code on
//  line 13.

// Here's the equivalent hoisted code:

// var index;
// var foo;
//
// for (index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }
//
// console.log(foo);
// console.log(index);
