const consonants = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
                'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  let arr = string.split('');
  let newArr = [];
  arr.forEach(element => {
    if (consonants.includes(element.toLowerCase())) {
      newArr.push(element + element);
    } else {
      newArr.push(element);
    }
  });
  return newArr.join('');
}



doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
