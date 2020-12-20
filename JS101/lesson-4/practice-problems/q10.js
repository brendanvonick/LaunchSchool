let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageValues = Object.values(ages);
let minimumAge = ageValues[0];

ageValues.forEach(element => {
  if (element < minimumAge) {
    minimumAge = element;
  }
})

console.log(minimumAge);
