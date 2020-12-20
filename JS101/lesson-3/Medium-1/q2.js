let munstersDescription = "The Munsters are creepy and spooky.";
// => `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let munstersArray = munstersDescription.split('').map(character => {
                        if (character === character.toUpperCase()) {
                          return character.toLowerCase();
                        } else {
                          return character.toUpperCase();
                        }
                      });

console.log(munstersArray.join(''));
