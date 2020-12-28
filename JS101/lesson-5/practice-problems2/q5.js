let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleTotalAge = 0;

for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    maleTotalAge += munsters[member].age;
  }
}

console.log(maleTotalAge);
