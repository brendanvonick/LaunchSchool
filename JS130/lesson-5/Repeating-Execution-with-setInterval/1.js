// Write a function named startCounting that logs a number to the console every
// second, starting with 1. Each output number should be one greater than the
// previous one.

function startCounting() {
  let value = 1;
  let id = setInterval(() => {
    console.log(value);
    value += 1;
  }, 1000);
}

startCounting();
