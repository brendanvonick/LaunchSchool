function centerOf(string) {
  let arr = string.split('');

  if (arr.length % 2 === 1) {
    return arr[Math.ceil(arr.length / 2) - 1];
  } else {
    return arr[(arr.length / 2) - 1] + arr[(arr.length / 2)];
  }
}



centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
