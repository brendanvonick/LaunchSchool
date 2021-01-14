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



rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
