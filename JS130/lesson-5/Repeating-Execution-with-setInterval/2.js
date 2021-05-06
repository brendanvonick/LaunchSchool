// Extend the code from the previous problem with a stopCounting function that
// stops the logger when called.

let countingID;

function startCounting() {
  let value = 1;
  let id = setInterval(() => {
    console.log(value);
    value += 1;
  }, 1000);

  countingID = id;
}

function stopCounting() {
  clearInterval(countingID);
}

startCounting();
stopCounting();
