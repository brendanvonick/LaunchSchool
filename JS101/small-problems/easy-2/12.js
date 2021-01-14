const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {
  let sign = '';
  if (number < 0) {
    sign = '-';
  } else if (number > 0) {
    sign = '+';
  }

  let num = Math.abs(number);

  let string = '';
  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    string = numbers[remainder] + string;
  } while (num > 0)
  return sign + string;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
