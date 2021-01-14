function xor(val1, val2) {
  if ((val1 || val2) && !(val1 && val2)) {
    return true;
  } else {
    return false;
  }
}




console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
