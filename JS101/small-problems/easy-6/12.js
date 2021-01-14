function isBalanced(string) {
  let arr = string.split('');
  let parentheses = arr.filter(element => {
    return (element === '(' || element === ')');
  });

  let parString = parentheses.join('');
  while (parString.includes('()')) {
    pairOut = parString.split('()');
    parString = pairOut.join('');
  }

  return parString.length === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
