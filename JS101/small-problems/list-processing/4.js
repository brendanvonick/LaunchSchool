function leadingSubstrings(string) {
  let arr = [];

  for (let length = 1; length <= string.length; length += 1) {
    arr.push(string.slice(0, length));
  }
  return arr.sort();
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
