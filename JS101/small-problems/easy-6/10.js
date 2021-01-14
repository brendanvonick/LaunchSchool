function reverseWords(string) {
  let arrOfWords = string.split(' ');
  let newArr = [];

  arrOfWords.forEach(element => {
    if (element.length >= 5) {
      newArr.push(element.split('').reverse().join(''));
    } else {
      newArr.push(element);
    }
  });
  return newArr.join(' ');
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
