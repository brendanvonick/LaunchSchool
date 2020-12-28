let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let arrayValues = Object.values(obj);

arrayValues.forEach(subArray => {
  let vowels = 'aeiou';

  subArray.forEach(string => {
    let splitString = string.split('');

    splitString.forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});
