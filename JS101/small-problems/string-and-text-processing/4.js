function wordCap(string) {
  let subArr = string.toLowerCase().split(' ');
  let newArr = [];

  subArr.forEach(element => {
    let newElement = element[0].toUpperCase() + element.slice(1);

    newArr.push(newElement);
  });

  return newArr.join(' ');
}



wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
