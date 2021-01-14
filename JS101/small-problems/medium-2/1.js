const LOWER_CASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                    'y', 'z']
const UPPER_CASE = LOWER_CASE.map(element => element.toUpperCase());

function letterPercentages(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  let result = { lowercase: '', uppercase: '', neither: '' };
  let stringArr = string.split('');

  stringArr.forEach(element => {
    if (LOWER_CASE.includes(element)) {
      obj.lowercase += 1;
    } else if (UPPER_CASE.includes(element)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });
  result.lowercase = String(((obj.lowercase / string.length) * 100).toFixed(2));
  result.uppercase = String(((obj.uppercase / string.length) * 100).toFixed(2));
  result.neither = String(((obj.neither / string.length) * 100).toFixed(2));
  return result;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
