let output = 'The Flintstones Rock!';
let counter = 0;
let spaces = 0;

while (counter < 10) {
  console.log(output.padStart(spaces + output.length));
  spaces += 1;
  counter += 1;
}
