const LOWER_CASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                   'y', 'z'];

const UPPER_CASE = LOWER_CASE.map(element => element.toUpperCase());

function doWhile(arr, newArr, index, charCount) {
  do {
    if (!LOWER_CASE.includes(arr[index]) && !UPPER_CASE.includes(arr[index])) {
      newArr.push(arr[index]);
      index += 1;
      continue;
    }

    if (charCount % 2 === 0) {
      newArr.push(arr[index].toUpperCase());
    } else {
      newArr.push(arr[index].toLowerCase());
    }

    index += 1;
    charCount += 1;
  } while (index < arr.length);
}

function staggeredCase(string) {
  let arr = string.split('');
  let newArr = [];

  let index = 0;
  let charCount = 0;

  doWhile(arr, newArr, index, charCount);

  return newArr.join('');
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
