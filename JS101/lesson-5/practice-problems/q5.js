let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = 0;

for (let object in munsters) {
  if (munsters[object]['gender'] === 'male') {
    totalMaleAge += munsters[object]['age'];
  }
}

console.log(totalMaleAge);
