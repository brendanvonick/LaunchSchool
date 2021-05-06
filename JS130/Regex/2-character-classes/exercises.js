// 1. Write a regex that matches uppercase or lowercase Ks or a lowercase s.
//    Test it with these strings:

// Kitchen Kaboodle
// Reds and blues
// kitchen Servers

// There should be six matches.

// /[Kks]/g

// 2. Write a regex that matches any of the strings cat, cot, cut, bat, bot, or
//    but, regardless of case. Test it with this text:

// My cats, Butterscotch and Pudding, like to
// sleep on my cot with me, but they cut my sleep
// short with acrobatics when breakfast time rolls
// around. I need a robotic cat feeder.

// There should be nine matches.

// /[cb][aou]t/gi

// 3. Base 20 digits include the decimal digits 0 through 9, and the letters A
//    through J in upper or lowercase. Write a regex that matches base 20
//    digits. Test it with these strings:

// 0xDEADBEEF
// 1234.5678
// Jamaica
// plow ahead

//  /[0-9a-jA-J]/g

// 4. Write a regex that matches any letter except x or X. Test it with these
//    strings:

// 0x1234
// Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
// The quick brown fox jumps over the lazy dog
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG

// /[A-WYZa-wyz]/g

// 5. Why is /[^xX]/ not a valid answer to the previous exercise?

//  The question asked to match every letter, it didn't include numbers or
//  non-alphanumeric characters.

// 6. Write a regex that matches any character that is not a letter. Test it
//    with these strings:

// 0x1234abcd
// 1,000,000,000s and 1,000,000,000s.
// THE quick BROWN fox JUMPS over THE lazy DOG!

//  /[^a-z]/gi

// 7. Are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they
//    differ? Can you provide an example of a string that would match one of
//    these regex, but not the other?

// No they are not the same. The first matches only capitals ABC, or only
// lowercase abc. The 2nd matchs either A or a, then B or b, then C or c.
// A string that matches the 2nd and not the first is 'aBc'.

// 8. Are /abc/i and /[Aa][Bb][Cc]/ equivalent regex? If not, how do they
//    differ? Can you provide an example of a string that would match one of
//    these regex, but not the other?

// They are equivalent. They match abc, regardless of case.

// 9. Challenge: write a regex that matches a string that looks like a simple
//    negated character class range, e.g., '[^a-z]'. (Your answer should match
//    precisely six characters.) Test it with these strings:

// The regex /[^a-z]/i matches any character that is
// not a letter. Similarly, /[^0-9]/ matches any
// non-digit while /[^A-Z]/ matches any character
// that is not an uppercase letter. Beware: /[^+-<]/
// is at best obscure, and may even be wrong.

//  There should be three matches.

//  /\[\^[0-9A-Za-z]-[0-9A-Za-z]\]/g
