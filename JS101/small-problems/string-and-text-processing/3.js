const LOWER_CASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                   'y', 'z'];

const UPPER_CASE = LOWER_CASE.map(element => element.toUpperCase());

function letterCaseCount(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };

  let arr = string.split('');

  arr.forEach(element => {
    if (LOWER_CASE.includes(element)) {
      obj.lowercase += 1;
    } else if (UPPER_CASE.includes(element)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });

  return obj;
}



letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
