function repeater(string) {
  let arr = string.split('');
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element + element);
  });
  return newArr.join('');
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
