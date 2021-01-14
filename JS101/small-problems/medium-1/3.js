function rotateArray(item) {
  let newArr = [];
  if (Array.isArray(item) && item.length !== 0) {
    for (let index = 1; index < item.length; index += 1) {
      newArr.push(item[index]);
    }
    newArr.push(item[0]);
    return newArr;
  } else if (Array.isArray(item) && item.length === 0) {
    return newArr;
  } else {
    return undefined;
  }
}

function rotateRightmostDigits(num, count) {
  let resultArr = [];
  let remainsTheSame = String(num).slice(0, (String(num).length - count)).split('');
  let toRotate = String(num).slice((String(num).length) - count).split('');

  let rotatedArr = rotateArray(toRotate);
  resultArr = resultArr.concat(remainsTheSame, rotatedArr);
  let result = Number(resultArr.join(''));
  return result;
}

function maxRotation(integer) {
  let arr = [];
  let num = integer;
  let count = String(num).length;

  for (let index = 0; index < String(integer).length; index += 1) {
    num = rotateRightmostDigits(num, count);
    count -= 1;
  }

  return num;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
