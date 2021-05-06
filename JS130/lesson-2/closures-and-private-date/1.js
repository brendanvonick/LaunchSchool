//  Create a function named makeCounterLogger that takes a number as an
//  argument and returns a function. When we invoke the returned function with
//  a second number, it should count up or down from the first number to the
//  second number, logging each number to the console:

function makeCounterLogger(num1) {
  return (num2) => {
    let value;
    
    if (num1 < num2) {
      for (value = num1; value <= num2; value += 1) {
        console.log(value);
      }
    } else if (num1 > num2) {
      for (value = num1; value >= num2; value -= 1) {
        console.log(value);
      }
    }
  };
}


let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2
