const VALUES = ['off', 'on'];
const SWITCHES = {};

function toggleValue(value) {
  if (value === VALUES[0]) {
    value = VALUES[1];
  } else {
    value = VALUES[0];
  }
  return value;
}

function iterate(count, switches) {
  while (count <= switches) {
    for (let key = count; key <= switches; key += count) {
      if (SWITCHES[key] === VALUES[0]) {
        SWITCHES[key] = VALUES[1];
      } else {
        SWITCHES[key] = VALUES[0];
      }
    }
    count += 1;
  }
}

function lightsOn(switches) {
  let result = [];

  for (let num = 1; num <= switches; num += 1) {
    SWITCHES[num] = 'off';
  }

  let count = 1;

  iterate(count, switches);

  for (let prop in SWITCHES) {
    if (SWITCHES[prop] === VALUES[1]) {
      result.push(Number(prop));
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
