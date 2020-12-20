[1, 2, 3].every(num => {
  return num = num * 2;
});

/*  The callback's return value is 2, 4, 6. The return value of every is
    true because there is no condition here, the result is always a truthy value
    that is applied to each element in the original array.
*/
