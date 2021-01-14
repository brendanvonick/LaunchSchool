const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let string = '';
  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    string = numbers[remainder] + string;
  } while (num > 0)
  console.log(string);
}






integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
