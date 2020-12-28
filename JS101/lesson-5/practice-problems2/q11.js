let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let incrementalObj = {};

  for (let key in obj) {
    incrementalObj[key] = obj[key] + 1;
  }

  return incrementalObj;
});

console.log(newArr);
