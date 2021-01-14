function shortLongShort(string1, string2) {
  let shortString = ''
  let longString = ''

  if (string1.length < string2.length ) {
    shortString = string1;
    longString = string2;
  } else if(string1.length > string2.length) {
    shortString = string2;
    longString = string1;
  }

  return shortString + longString + shortString;
}



shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
