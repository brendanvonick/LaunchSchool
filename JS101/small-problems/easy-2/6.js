function penultimate (string) {
  let words = string.split(' ');
  return words[words.length - 2];
}



console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("This is cool"));
