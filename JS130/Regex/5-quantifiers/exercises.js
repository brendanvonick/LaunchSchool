// 1. Write a regex that matches any word that begins with b and ends with an
//    e, and has any number of letters in-between. You may limit your regex to
//    lowercase letters. Test it with these strings.

// To be or not to be
// Be a busy bee
// I brake for animals.

// There should be four matches.

// /\bb[a-z]*e\b/g

// 2. Write a regex that matches any line of text that ends with a ?. Test it
//    with these strings.

// What's up, doc?
// Say what? No way.
// ?
// Who? What? Where? When? How?

// There should be three matches.

// /^.*\?$/g

// 3. Write a regex that matches any line of text that ends with a ?, but does not
//    match a line that consists entirely of a single ?. Test it with the
//    strings from the previous exercise.

// There should be two matches.

// /^.+\?$/g

// 4. Write a regex that matches any line of text that contains nothing but a
//    URL. For this exercise, a URL begins with http:// or https://, and
//    continues until it detects a whitespace character or end of line. Test
//    your regex with these strings:

// http://launchschool.com/
// https://mail.google.com/mail/u/0/#inbox
// htpps://example.com
// Go to http://launchschool.com/
// https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello
//     http://launchschool.com/

// There should be two matches.

// /^https*:\/\/\S*$/g

// 5. Modify your regex from the previous exercise so the URL can have optional
//    leading or trailing whitespace, but is otherwise on a line by itself. To
//    test your regex with trailing whitespace, you must add some spaces to the
//    end of some lines in your sample text.

// There should be three matches.

// /^\s*https*:\/\/\S*\s*$/g

// 6. Modify your regex from the previous exercise so the URL can appear
//    anywhere on each line, so long as it begins at a word boundary.

// There should be five matches.

// /\bhttps*:\/\/\S*/g

// 7. Write a regex that matches any word that contains at least three
//    occurrences of the letter i. Test your regex against these strings:

// There should be three matches.

// Mississippi
// ziti 0minimize7
// inviting illegal iridium

// /\b[a-z]*i[a-z]*i[a-z]*i[a-z]*\b/gi
// or /\b([a-z]*i){3}[a-z]*\b/gi

// 8. Write a regex that matches the last word in each line of text. For this
//    exercise, assume that words are any sequence of non-whitespace characters.
//    Test your regex against these strings:

// What's up, doc?
// I tawt I taw a putty tat!
// Thufferin' thuccotath!
// Oh my darling, Clementine!
// Camptown ladies sing this song, doo dah.

// There should be five matches.

// /\S+$/g

// 9. Write a regex that matches lines of text that contain at least 3, but no
//    more than 6, consecutive comma separated numbers. You may assume that
//    every number on each line is both preceded by and followed by a comma.
//    Test your regex against these strings:

// ,123,456,789,123,345,
// ,123,456,,789,123,
// ,23,56,7,
// ,13,45,78,23,45,34,
// ,13,45,78,23,45,34,56,

// There should be three matches.

// ^,(\d+,){3,6}$/g

// 10. Write a regex that matches lines of text that contain at least 3, but no
//     more than 6, consecutive comma separated numbers. In this exercise, you
//     can assume that the first number on each line is not preceded by a comma,
//     and the last number is not followed by a comma. Test your regex against
//     these strings:

// 123,456,789,123,345
// 123,456,,789,123
// 23,56,7
// 13,45,78,23,45,34
// 13,45,78,23,45,34,56

// There should be three matches.

// /^(\d+,){2,5}\d+$/g

// 11. Challenge: Write a regex that matches lines of text that contain either
//     3 comma separated numbers or 6 or more comma separated numbers. Test
//     your regex against these strings:

// 123,456,789,123,345
// 123,456,,789,123
// 23,56,7
// 13,45,78,23,45,34
// 13,45,78,23,45,34,56

// There should be three matches.

// /(^(\d+,){2}\d+$|^(\d+,){5,}\d+$)/g
// or /^(\d+,){2}((\d+,){3,})?\d+$/g

// 12. Challenge: Write a regex that matches HTML h1 header tags, e.g.,

// <h1>Main Heading</h1>
// <h1>Another Main Heading</h1>

// and the content between the opening and closing tags. If multiple header
// tags appear on one line, your regex should match the opening and closing
// tags and the text content of the headers, but nothing else. You may assume
// that there are no nested tags in the text between <h1> and </h1>.

// /<h1>.*?<\/h1>/g
