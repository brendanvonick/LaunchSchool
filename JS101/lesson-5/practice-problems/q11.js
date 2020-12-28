let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(object => {
  let incrementalObject = {};

  for (let key in object) {
    incrementalObject[key] = object[key] + 1;
  }

  return incrementalObject;
});

console.log(newArr);
