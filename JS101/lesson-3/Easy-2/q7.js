let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let flintstonesArray = Object.entries(flintstones);

let barneyEntry = [];

flintstonesArray.forEach(entry => {
  if (entry[0] === 'Barney') {
    barneyEntry.push(...entry);
  }
});

console.log(barneyEntry);

// You could also do:

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
