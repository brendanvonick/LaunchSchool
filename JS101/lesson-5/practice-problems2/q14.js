let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]


let capitalize = word => word[0].toUpperCase() + word.slice(1);

let arr = Object.values(obj).map(nestedObj => {
  if (nestedObj['type'] === 'fruit') {
    return nestedObj['colors'].map(element => capitalize(element));
  } else {
    return nestedObj['size'].toUpperCase();
  }
});

console.log(arr);
