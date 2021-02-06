function triangle(num) {
  let val = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    val += idx;
  }

  return val;
}






triangle(1) // => 1
triangle(3) // => 6
triangle(4) // => 10

triangle(6) // => 21

triangle(215) // => 23220
