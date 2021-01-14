let lookup = {};

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else if (lookup[num]) {
    return lookup[num];
  } else {
    lookup[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return lookup[num];
  }
}


fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
