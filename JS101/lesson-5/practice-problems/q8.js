let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let words = Object.values(obj);

words.forEach(element => {
  element.forEach(word => {
    let splitElement = word.split('');

    splitElement.forEach(letter => {
      if ('aeiou'.includes(letter)) {
        console.log(letter);
      }
    })
  })
});
