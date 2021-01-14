const STAR = '*';
const SPACE = ' ';

function diamond(num) {

  let spaces = Math.floor(num / 2);
  let stars = 1;

  for (let line = 1; line <= Math.ceil(num / 2); line += 1) {
    console.log(`${SPACE.repeat(spaces)}${STAR.repeat(stars)}${SPACE.repeat(spaces)}`);
    spaces -= 1;
    stars += 2;
  }

  spaces = 1;
  stars = num - 2;

  for (let line = 1; line <= Math.floor(num / 2); line += 1) {
    console.log(`${SPACE.repeat(spaces)}${STAR.repeat(stars)}${SPACE.repeat(spaces)}`);
    spaces += 1;
    stars -= 2;
  }

}


diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

 diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
