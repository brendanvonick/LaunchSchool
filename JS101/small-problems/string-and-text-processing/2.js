const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function removeVowels(string) {
  let result = [];

  string.forEach(element => {
    let subArr = element.split('');
    let newSubArr = [];

    for (let index = 0; index < subArr.length; index += 1) {
      if (!VOWELS.includes(element[index])) {
        newSubArr.push(element[index]);
      }
    }

    result.push(newSubArr.join(''));
  });

  return result;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
