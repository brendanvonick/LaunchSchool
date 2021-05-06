//  Will the following code execute without error? Try to answer without
//  running it.

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();


//  No, it will return an error. We are trying to immediately invoke the
//  function but failed to put parentheses around the function to make it a
//  function expression. It's a syntax error.
