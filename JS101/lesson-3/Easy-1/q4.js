let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let munstersNewDescription = munstersDescription[0].toUpperCase()
  + munstersDescription.substring(1).toLowerCase();

console.log(munstersNewDescription);
