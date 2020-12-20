['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

//  [undefined, 'bear']
/*  Because the return statement is within an if statement in the callback code,
    there is no return statement for the first element in the array - it doesn't
    meet the condition of the if statement, which causes map to return undefined.
    The second element, does meet this condition though so the element is returned.
*/
