//  Let's move the variable declaration into makeCounter now. What do the 4
//  console.log statements at the end of this program print? Try to answer
//  without running the code:

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

//  The following is logged:
//  1
//  2
//  1
//  2
