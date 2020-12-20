function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*  They do not return the same results. This is because javascript inserts
    semi-colons where it thinks they should be, and in the second() function,
    the opening curly bracket is on a new line, so javascript automatically
    inserts a semi-colon after return, so it doesn't return anything meaningful
    nd returns undefined instead.
*/
