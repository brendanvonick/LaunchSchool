// 1. Write a regex that matches the word The when it occurs at the beginning
//    of a line. Test it with these strings:

// The lazy cat sleeps.
// The number 623 is not a word.
// Then, we went to the movies.
// Ah. The bus has arrived.

// There should be two matches.

// /^The\b/g

// 2. Write a regex that matches the word cat when it occurs at the end of a
//    line. Test it with these strings:

// The lazy cat sleeps
// The number 623 is not a cat
// The Alaskan drives a snowcat

// There should be one match.

// /\bcat$/g

// 3. Write a regex that matches any three-letter word; a word is any string
//    comprised entirely of letters. You can use these test strings.

// reds and blues
// The lazy cat sleeps.
// The number 623 is not a word. Or is it?

// There should be five matches.

// /\b[a-z][a-z][a-z]\b/gi
