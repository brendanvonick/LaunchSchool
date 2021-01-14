/*
Given a string,
split string into array of strings, separated by spaces.
Create an object
For each element (string) in the array,
  add to object property: string length, value: 1
  if string length property already exists, value += 1
Return object
*/

function wordSizes(string) {
  let array = string.split(' ');
  let object = {};

  if (array.length > 0 && array[0] !== '') {
    array.forEach(element => {
      if (object.hasOwnProperty(element.length)) {
        object[element.length] += 1;
      } else {
        object[element.length] = 1;
      }
    });
  }

  return object;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
