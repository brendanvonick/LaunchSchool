// 1. What naming convention separates constructor functions from other
//    functions?

//  Constructor function names have their first letters capitalized.


// 2. What happens if you run the following code? Why?

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }
//
// let lizzy = Lizard();
// lizzy.scamper(); // ?

//  We get an error because scamper isn't a property of lizzy. The Lizard
//  constructor was called without the new operator so Undefined is returned by
//  the function. lizzy gets a value of Undefined and it doesn't have any
//  properties, especially not scamper, so an error is raised when we try to
//  reference it.


// 3. Alter the code in problem 2 so that it produces the desired output:
//    'I'm scampering!'

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
console.log(lizzy.scamper()); // 'I'm scampering!'
