function negative(number) {
  if (number >= 0) {
    number = Number('-' + String(number));
    return number;
  } else {
    return number;
  }
}


negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
