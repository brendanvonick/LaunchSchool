function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// The issue here is that we are mutating the array we are calling forEach() on
// during iteration. This is highly problematic as removing elements effects the
// iteration process, thereby not affecting every element in the array. To fix
// this we would need to use another form of iteration or use another method to
// make the desired changes.
