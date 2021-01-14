function isInvalid(deg1, deg2, deg3) {
  if (deg1 + deg2 + deg3 !== 180) {
    return true;
  } else if(deg1 === 0 || deg2 === 0 || deg3 === 0) {
    return true;
  } else {
    return false;
  }
}


function triangle(deg1, deg2, deg3) {
  if (isInvalid(deg1, deg2, deg3)) {
    return 'invalid';
  } else if (deg1 === 90 || deg2 === 90 || deg3 === 90) {
    return 'right';
  } else if (deg1 > 90 || deg2 > 90 || deg3 > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
