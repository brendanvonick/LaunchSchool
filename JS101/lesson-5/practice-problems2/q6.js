let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// (Name) is a (age)-year-old (male or female).

for (let member in munsters) {
  let name = member;
  let age = munsters[member].age;
  let gender = munsters[member].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
}
