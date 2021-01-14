function getGrade(num1, num2, num3) {
  let score = (num1 + num2 + num3) / 3;

  if (90 <= score && score <= 100) {
    return 'A';
  } else if (80 <= score && score < 90) {
    return 'B';
  } else if (70 <= score && score < 80) {
    return 'C';
  } else if (60 <= score && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
