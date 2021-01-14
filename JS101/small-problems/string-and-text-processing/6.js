function staggeredCase(string) {
  let arr = string.split('');
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (index % 2 === 0) {
      newArr.push(arr[index].toUpperCase());
    } else {
      newArr.push(arr[index].toLowerCase());
    }
  }

  return newArr.join('');
}


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
