function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function findFibonacci(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let fibArr = [];

  for (let index = 0; fibonacci(index) <= newArr[newArr.length - 1]; index += 1) {
    fibArr.push(fibonacci(index));
  }


  let value = newArr.find(element => fibArr.includes(element));

  return value;

}



findFibonacci([24, 56, 587, 612, 210, 82, 1597, 2002]);
