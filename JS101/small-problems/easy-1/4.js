// 1 square meter == 10.7639 square feet

const readline = require('readline-sync');
const SQM_TO_SQFT = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readline.prompt();
console.log('Enter the width of the room in meters:');
let width = readline.prompt();

let areaM = (Number(length) * Number(width)).toFixed(2);
let areaFt = (areaM * SQM_TO_SQFT).toFixed(2);

console.log(`The area of the room is ${areaM} square meters ` +
            `(${areaFt} square feet).`);

/*

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

*/
