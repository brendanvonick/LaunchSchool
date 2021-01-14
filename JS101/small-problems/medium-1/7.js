function fibonacci(num) {
  let arr = [1, 1, 2, 3];

  for (let index = 4; index < num; index += 1) {
    arr.push(arr[index - 2] + arr[index - 1]);
  }

  return arr[num - 1];
}


fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
