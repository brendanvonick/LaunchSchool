function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));

// The primary issue here is that there are 2 defined functions named range.
// We cannot have that as the first function is overriden by the 2nd function
// declaration. We have to eliminate that becuse it would keep calling itself
// until it reaches the max stack size, returning the error.
