function rotateArray(item) {
  let newArr = [];
  if (Array.isArray(item) && item.length !== 0) {
    for (let index = 1; index < item.length; index += 1) {
      newArr.push(item[index]);
    }
    newArr.push(item[0]);
    return newArr;
  } else if (Array.isArray(item) && item.length === 0) {
    return newArr;
  } else {
    return undefined;
  }
}




rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
