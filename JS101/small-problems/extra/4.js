function possibleBonus(num1, num2) {
  if (num2 - num1 < 0 || num2 - num1 > 6) {
    return false;
  } else {
    return true;
  }
}




possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
