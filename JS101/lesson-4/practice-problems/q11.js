let statement = "The Flintstones Rock";
let obj = {};

let letters = statement.split(' ').join('');
let lettersArray = letters.split('');

console.log(lettersArray);

lettersArray.forEach(element => {
  if (Object.keys(obj).includes(element)) {
    obj[element] += 1;
  } else {
    obj[element] = 1;
  }
})

console.log(obj);


// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
