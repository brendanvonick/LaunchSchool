function countOccurrences(array) {
  let obj = {};

  array.forEach(element => {
    if (!Object.keys(obj).includes(element)) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });

  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
/*
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
