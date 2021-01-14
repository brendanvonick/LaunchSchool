function swapName(string) {
  let arr = string.split(' ').reverse();

  return arr.join(', ');
}



swapName('Joe Roberts');    // "Roberts, Joe"
