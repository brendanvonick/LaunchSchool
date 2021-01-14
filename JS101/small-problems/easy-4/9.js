const ALPHA_NUMERIC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                       'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                       'w', 'x', 'y', 'z'];

function removeNonAToZ(array) {
  let newArray = [];
  array.forEach(element => {
    let subArray = element.split('');
    let newSubArray = subArray.filter(char => ALPHA_NUMERIC.includes(char));
    newArray.push(newSubArray.join(''));
  });
  return newArray;
}

function wordSizes(string) {
  let array = string.toLowerCase().split(' ');
  let arrayOfStrings = removeNonAToZ(array);
  let object = {};

  if (arrayOfStrings.length > 0 && arrayOfStrings[0] !== '') {
    arrayOfStrings.forEach(element => {
      if (object.hasOwnProperty(element.length)) {
        object[element.length] += 1;
      } else {
        object[element.length] = 1;
      }
    });
  }

  return object;
}



wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
