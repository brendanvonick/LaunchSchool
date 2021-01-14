let ageRange = [];
for (let index = 20; index <= 120; index += 1) {
  ageRange.push(index);
}

let age = ageRange[Math.floor(Math.random() * (ageRange.length - 1))];

console.log(`Teddy is ${age} years old!`);

// Teddy is 69 years old!
